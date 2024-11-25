// From  https://raoul.socsci.uva.nl/EZ2/EZ2_new.html

const aVRTs = [];
const aCVRTs = [];
const aPEs = [];
const aMRTs = [];
const aCMRTs = [];
const aParams = [];

// the solver
let theLastSolver = {};

// problem & optimization function
function sign(r) {
  return ((r > 0) ? 1 : ((r === 0) ? 0 : -1));
}

function logit(p) {
  return Math.log(p / (1 - p));
}

// EZ-function for starting values
// input: obj - Object with properties
//    p - Proportion correct
//    VRT - sample variance of the RT's
//    MRT - sample mean of the RT's
//    s - diffusion standard deviation
// returns: Object with properties v, a, and Ter, containing EZ-estimates of these parameters
function Data2EZ({p, VRT, MRT, s}) {
  if (p === 0) {
    alert('Oops, only errors!');
    return {};
  }
  if (p === 0.5) {
    alert('Oops, chance performance!');
    return {};
  }
  if (p === 1) {
    alert('Oops, only correct responses!');
    return {};
  }

  const s2 = s ** 2;
  const L = logit(p);
  const x = (L * (L * p ** 2 - L * p + p - 0.5)) / VRT;
  const v = sign(p - 0.5) * s * x ** (1 / 4);
  const a = (s2 * logit(p)) / v;
  const y = (-v * a) / s2;
  const MDT = ((a / (2 * v)) * (1 - Math.exp(y))) / (1 + Math.exp(y));
  const Ter = (MRT ? MRT - MDT : null); // compute Ter only if MRT was provided

  return {v, a, Ter};
}

// The prediction functions unconditional on the point of exit
// computes theoretical variance of the RTs of the pooled correct and error (!) responses
function VRT(m, x, a, s) {
  const nu = m;
  const z = x;
  return ((-nu * (Math.exp(-2.0 * (nu / s ** 2) * z) - 1.0) ** 2.0 * a ** 2
    - 4.0 * nu * (Math.exp(-2.0 * (nu / s ** 2) * z) - 1.0) * a ** 2)
    / (Math.exp(-2.0 * (nu / s ** 2) * a) - 1.0) ** 2.0
    + ((-3.0 * nu * a ** 2 + 4.0 * nu * z * a + s ** 2 * a)
      * (Math.exp(-2.0 * (nu / s ** 2) * z) - 1.0) + 4.0 * nu * z * a)
    / (Math.exp(-2.0 * (nu / s ** 2) * a) - 1.0) - s ** 2 * z) / (nu ** 3);
}

// computes expected proportion of error (!) responses
function PE(m, x, a, s) {
  return (Math.exp(-2.0 * (m / s ** 2) * a) - Math.exp(-2.0 * (m / s ** 2) * x))
    / (Math.exp(-2.0 * (m / s ** 2) * a) - 1.0);
}

// computes theoretical mean of the RTs of the pooled correct and error (!) responses
function MRT(m, x, a, s, Ter) {
  // efficient computation of a / (exp(-2.0 * m / (s * s) * a) - 1.0)
  // / m * exp(-2.0 * m / (s * s) * x) - 1 / m * x
  // - 1 / m * a / (exp(-2.0 * m / (s * s) * a) - 1.0) + Ter;
  const t1 = s * s;
  const t3 = m / t1;
  const t6 = Math.exp(-2.0 * t3 * a);
  const t8 = 1 / (t6 - 1.0);
  const t10 = 1 / m;
  const t13 = Math.exp(-2.0 * t3 * x);
  const t19 = a * t8 * t10 * t13 - t10 * x - t10 * a * t8 + Ter;
  return t19;
}

// The prediction functions conditional on the point of exit
// input:
//    nu - double, drift rate of a diffusion with absorbing boundaries
//    z   - double, starting point in interval (0, a)
//    a   - double, boundary separation & upper boundary
//    s   - diffusion standard deviation
// output:  Variance of the exit time **given that the particle exits through the lower boundary**
//  (use mapping z -> a-z for exit through upper boundary)
function CVRT(nu_, z_, a, s) {
  // this is optimized code for the expression
  //  (-4 * nu * exp(2 * nu / s^2 * a) * (-1 + exp(2 * z * nu / s^2))
  //  * (exp(4 * nu / s^2 * a) - exp(2 * z * nu / s^2)) * a^2 - 4 * exp(2 * (z + a) * nu / s^2)
  //  * nu * (exp(2 * nu / s^2 * a) - 1)^2 * z^2 + 8 * exp(2 * (z + a) * nu / s^2) * nu *
  //  (exp(2 * nu / s^2 * a) - 1)^2 * a * z + 2 * s^2 * exp(2 * nu / s^2 * a)
  //  * (-1 + exp(2 * z * nu / s^2)) * (exp(2 * nu / s^2 * a) - 1)
  //  * (-exp(2 * nu / s^2 * a) + exp(2 * z *nu / s^2)) * a - s^2 * (exp(2 * nu / s^2 * a) - 1)^2
  //  * (-exp(4 * nu / s^2 * a) + exp(4 * z * nu / s^2)) * z) / (exp(2 * nu / s^2 * a) - 1)^2
  //  / nu^3 / (exp(2 * nu / s^2 * a) - exp(2 * z * nu / s^2))^2

  // the routine implements the error response time variance,
  // while most people will assume the correct response time variance
  const z = a - z_;
  const nu = -nu_;

  const t1 = s * s;
  const t2 = 1 / t1;
  const t4 = nu * t2 * a;
  const t6 = Math.exp(2.0 * t4);
  const t9 = z * nu * t2;
  const t11 = Math.exp(2.0 * t9);
  const t12 = -1.0 + t11;
  const t14 = Math.exp(4.0 * t4);
  const t17 = a * a;
  const t25 = Math.exp(2.0 * (z + a) * nu * t2);
  const t26 = t25 * nu;
  const t27 = t6 - 1.0;
  const t28 = t27 * t27;
  const t29 = z * z;
  const t39 = -t6 + t11;
  const t46 = Math.exp(4.0 * t9);
  const t53 = nu * nu;
  const t57 = t39 * t39;

  return ((-4.0 * nu * t6 * t12 * (t14 - t11) * t17
    - 4.0 * t26 * t28 * t29 + 8.0 * t26 * t28 * a * z
    + 2.0 * t1 * t6 * t12 * t27 * t39 * a
    - t1 * t28 * (-t14 + t46) * z) / t28 / t53 / nu / t57);
}

function CMRT(nu, z_, a, s, Ter) {
  // this is optimized code for the expression
  //  ((exp(4 * nu / s^2 * a) + exp(2 * nu * (x + a) / s^2)
  //  - exp(2 * nu / s^2 * a) - exp(2 * nu * x / s^2)) * x + (2 * exp(2 * nu / s^2 * a)
  //  - 2 * exp(2 * nu * (x + a) / s^2)) * a) / nu / (exp(2 * nu / s^2 * a)
  //  - exp(2 * nu * x / s^2)) / (-1 + exp(2 * nu / s^2 * a))

  // the routine implements the mean RT of the error responses,
  // while most people will assume the MRT of the correct responses
  const z = a - z_;

  const t1 = s * s;
  const t2 = 1 / t1;
  const t4 = nu * t2 * a;
  const t6 = Math.exp(4.0 * t4);
  const t11 = Math.exp(2.0 * (z + a) * nu * t2);
  const t13 = Math.exp(2.0 * t4);
  const t17 = Math.exp(2.0 * z * nu * t2);
  const t30 = (1 / (t13 - 1.0) / (t13 - t17) / nu)
    * (z * (t6 + t11 - t13 - t17) + 2.0 * a * (t13 - t11));

  return (t30 + Ter);
}

// the objective function for Method-of-Moment estimates
function objf(aX) {
  let j = 0;

  // modify free global parameter values
  const restSave = [];
  for (let i = 0; i < aParams.length && j < aX.length; i += 1) {
    if (!aParams[i].isFixed()) {
      restSave[j] = window[aParams[i].name]; // save global state for later restoration
      window[aParams[i].name] = aX[j += 1];
    }
  }

  //
  //  Calculate descrepancy
  //
  let ssd = 0;
  // VRT's
  for (let i = 0; i < aVRTs.length; i += 1) {
    ssd += (aVRTs[i].observed() - aVRTs[i].predicted()) ** 2;
  }
  // CVRT's
  for (let i = 0; i < aCVRTs.length; i += 1) {
    ssd += (aCVRTs[i].observed() - aCVRTs[i].predicted()) ** 2;
  }
  // PE's
  for (let i = 0; i < aPEs.length; i += 1) {
    ssd += (aPEs[i].observed() - aPEs[i].predicted()) ** 2;
  }
  // MRT's
  for (let i = 0; i < aMRTs.length; i += 1) {
    ssd += (aMRTs[i].observed() - aMRTs[i].predicted()) ** 2;
  }
  // CMRT's
  for (let i = 0; i < aCMRTs.length; i += 1) {
    ssd += (aCMRTs[i].observed() - aCMRTs[i].predicted()) ** 2;
  }

  // restore free global parameter values
  j = 0;
  for (let i = 0; i < aParams.length && j < aX.length; i += 1) {
    if (!aParams[i].isFixed()) {
      window[aParams[i].name] = restSave[j += 1]; // restore global state
    }
  }
  return 1e6 * ssd;
}

function solver(acceptSol) {
  try {
    const h = new Hooke(objf);
    theLastSolver = h; // may be useful later to access convergens properties?

    // collect starting values
    const X = [];
    let j = 0;
    for (let i = 0; i < aParams.length; i += 1) {
      if (!aParams[i].isFixed()) {
        X[j += 1] = aParams[i].getValue();
      }
    }

    // check if necessary observed values are actually provided
    for (let i = 0; i < aVRTs.length; i += 1) {
      if (aVRTs[i].observed() <= 0) {
        throw new Error(`The parsed observed variance ${aVRTs[i].name()} is not positive.\n\nA valid value must be specified.`);
      }
    }
    for (let i = 0; i < aCVRTs.length; i += 1) {
      if (aCVRTs[i].observed() <= 0) {
        throw new Error(`The parsed observed variance ${aCVRTs[i].name()} is not positive.\n\nA valid value needs to be specified.`);
      }
    }
    for (let i = 0; i < aPEs.length; i += 1) {
      if (aPEs[i].observed() <= 0) {
        throw new Error(`The parsed observed proportion of errors ${aPEs[i].name()} is not positive. (EZ and EZ2 cannot handle perfect performances.)\n\nA valid value needs to be specified.`);
      }
    }
    for (let i = 0; i < aMRTs.length; i += 1) {
      if (aMRTs[i].observed() <= 0) {
        throw new Error(`The parsed observed mean ${aMRTs[i].name()} is not positive. A valid value needs to be specified.`);
      }
    }
    for (let i = 0; i < aCMRTs.length; i += 1) {
      if (aCMRTs[i].observed() <= 0) {
        throw new Error(`Parse observed mean ${aCMRTs[i].name()} is not positive. A valid value needs to be specified.`);
      }
    }
    if (X.length > aVRTs.length + aCVRTs.length + aPEs.length + aMRTs.length + aCMRTs.length) {
      throw new Error('Unable to solve for more parameters than equations. Try to set more parameters fixed.'); // alert('Unable to solve for more parameters than equations. Try to set more parameters fixed.');
    }

    // initialize Hooke object
    h.startpt = X;
    h.setConsole(null); // $('console'));
    h.EPSMIN = 1e-8;

    // solve
    h.main();

    // set the parameters to the values found
    for (let i = 0; i < X.length; i += 1) {
      X[i] = h.endpt[i].toPrecision(7);
    }
    if (acceptSol || confirm(`Solve found the following parameter values (in order of appearance, fixed parameters skipped):\n\n${X.join('\n')}\n\nDo you want to replace original (starting) values with these values? (In most cases you\'d want to click \'OK\'.) ${h.objf(h.endpt) > 1e-3 ? '\n\nIt is sometimes necessary to run solve a couple of times. If you have as many free parameters specified as there are observed moments, the current value of the discrepancy function suggests this is necessary. To do so, click \'OK\' and then press the Solve button again.\n\n' : '\n\nYou maybe able to improve on the current estimate. To do so, click \'OK\' and press the Solve button again.\n\n'}`)) {
      j = 0;
      for (let i = 0; i < aParams.length; i += 1) {
        if (!aParams[i].isFixed()) {
          aParams[i].setValue(h.endpt[j += 1]);
        }
      }

      updateAll();
    }
  } catch (e) {
    alert(e.description || e);
  }
}


// EZstart
function EZstart() {
  try {
    var obj=new Object();
    $('EZinterface-input1').value = (GetCookie('EZStartInput')?GetCookie('EZStartInput'):'s,Pe0,cVRT0\ns,Pe1,cVRT1'); 
    $('EZinterface-input2').value = (GetCookie('EZStartOutput')?GetCookie('EZStartOutput'):'v0,z,a\nv1,z,a'); 
    var EZintf = $('EZinterface')
    EZintf.hide = function(){ this.style.display = 'none'; }
    EZintf.prompt = function(){ this.style.display = 'block'; }
    EZintf.modelSet = false;
    EZintf.callBack = function(butt) {
      try{
        EZintf.hide(); 
        if(butt=='Cancel')
          return false; 
        var EZStartInputAll = $('EZinterface-input1').value.split(/\n/g);
        var EZStartOutputAll = $('EZinterface-input2').value.split(/\n/g);
        if(EZStartInputAll.length != EZStartOutputAll.length)
          throw {description: 'Both input fields should have the same number of rows'};
        SetCookie('EZStartInput',EZStartInputAll.join('\n')); 
        SetCookie('EZStartOutput',EZStartOutputAll.join('\n')); 
        EZintf.modelSet = true;
        for (var iter=0;iter < EZStartInputAll.length; iter++) {
          var EZStartInput = EZStartInputAll[iter];
          var EZStartOutput = EZStartOutputAll[iter];
          var aN = eval('['+EZStartInput.replace(/(\w+)/g,'\'$1\'')+']');
          var bN = eval('['+EZStartOutput.replace(/(\w+)/g,'\'$1\'')+']');
          var i=0;
          if(aParams.length==0)
            throw {description: 'No parameters defined!'};
          while(i<aParams.length&&aParams[i].name!=aN[0])
            i++;
          if(i>=aParams.length)
            throw {description: ('Error: No existing parameter named '+aN[0])};
          var s=aParams[i].getValue();
          var i=0;
          if(aPEs.length==0)
            throw {description: 'No Proportion Errors defined!'};
          while(i<aPEs.length&&aPEs[i].name()!=aN[1])
            i++;
          if(i>=aPEs.length)
            throw {description: ('Error: No existing observed Proportion Errors named '+aN[1])};
          var pe=aPEs[i].observed();
          if(aVRTs.length+aCVRTs.length==0)
            return alert('No Variances defined!');

          // look up the variance to use (can be either a VRT or a CVRT)
          var i=0,j=0;
          while(i<aVRTs.length&&aVRTs[i].name()!=aN[2])
            i++;
          while(j<aCVRTs.length&&aCVRTs[j].name()!=aN[2])
            j++; 
          if(i>=aVRTs.length && j>=aCVRTs.length)
            throw {description: ('Error: Non-existing observed variance named '+aN[2])};
          if(j>=aCVRTs.length)
            var vrt=aVRTs[i].observed();
          else
            var vrt=aCVRTs[j].observed();

          // find mean to use (can be either unused, an MRT, or a CMRT)
          var mrt = null;
          if (aN.length==4) {
            if(aMRTs.length+aCMRTs.length==0) 
              throw {description: ('No Mean defined!')}; 
            var i=0, j=0;
            while(i<aMRTs.length&&aMRTs[i].name()!=aN[3])
              i++;
            while(j<aCMRTs.length&&aCMRTs[j].name()!=aN[3])
              j++;
            if(i>=aMRTs.length && j>=aCMRTs.length) 
              throw {description: ('Error: Non-existing observed variance named '+aN[3])};
            if(j>=aCMRTs.length)
              mrt=aMRTs[i].observed();
            else
              mrt=aCMRTs[j].observed();
          }; 
          var obj={'p':1-pe,'VRT':vrt,'MRT':mrt,'s':s};
          var obj2=Data2EZ(obj); 
          if(!obj2) 
            throw {description: 'Error: Data2EZ failed. This probably occurs because an input value was not specified properly and interpreted as 0. \nGo back to the model and check to see that all observed values have been specified.'}
          obj2['z'] = obj2['a']/2; 
          var cN=['v','z','a','Ter'];
          for(var j=0;j<cN.length;j++)
            for(var i=0;i<aParams.length;i++)
              if(aParams[i].name==bN[j])
                aParams[i].setValue(obj2[cN[j]]); 
        }; 
                updateAll(); 
                return true;
            }
            catch(e){
                updateAll();
                alert(e.description || e);
                return false;
            }
        }
    $('EZinterface').prompt();
  } catch (e) {
    alert(e.description);
  }
}

function Data2EZ2()
/** input: none
// output: none
// sideeffect: the equations of specified model is sequentially solved for the paramters with the table of 
// observed values, the estimates are displayed in the textarea 'batchOutputTA' (i.e., 'batchOutputTA' is 
// _assumed_ to be a textarea!)
*/
{
    var warnings = new Array();                 // to accumulate warnings so that table processing continues uninterupted 
    $('batchwarningsconsole').innerHTML = '';   // clear warnings console

    try{
        // some formating patterns
        var frmth = frmtHead /* header of output table */, frmtb = frmtBody /* body of output table */;

        var inpTA = $('batchInputTA');
        var outTA = $('batchOutputTA');

        // make hash table so that parameter values functions can be referenced by label names
        var parVals = new Array();
        for(var i=0;i<aParams.length;i++) if(!aParams[i].isFixed()) parVals[aParams[i].name] = aParams[i]
        // make hash table so that predicted values functions can be referenced by label names
        var obsVals = new Array();
        for(var i=0;i<aVRTs.length;i++) obsVals[aVRTs[i].name()] = aVRTs[i]
        for(var i=0;i<aCVRTs.length;i++) obsVals[aCVRTs[i].name()] = aCVRTs[i]
        for(var i=0;i<aPEs.length;i++) obsVals[aPEs[i].name()] = aPEs[i]
        for(var i=0;i<aMRTs.length;i++) obsVals[aMRTs[i].name()] = aMRTs[i]
        for(var i=0;i<aCMRTs.length;i++) obsVals[aCMRTs[i].name()] = aCMRTs[i]

        /*
         // parse starting values table
         */
        var tmp = outTA.value;

        // clean up the table to make sure its in a standard format of \t column separartors and \n line seperators
        tmp = tmp.replace(/\v/g,'#V#');  // due to a bug, in Safari this replaces all v's (not \v's) by #V#
        tmp = cleanUpTable(tmp); 
        tmp = tmp.replace(/\#V\#/g,'v'); // restore possible occurences of #V# with a v (circumvent a bug in Safari)
        tmp = tmp.replace(/\n\t(\/\/\t)?/g,'\n'); // remove \t at start of a line (causes error)
        tmp = tmp.replace(/\s+$/g,'');            // remove trailing whitespaces  (causes warning)
        tmp = tmp.split(/\n/); 
        var head = tmp.shift(), tail = tmp.join('\n');
        var parNames = head.replace(/\t$/g,'').split(/\t/g);     // column names
        var parRows = tail.replace(/\t\n$/g,'\n').split(/\n/g);  // rows containing the values
        // check if the variable names are defined in the model, if not, issue only warnings that indicate which are not
        for(var k=0; k<parNames.length; k++)
            if(!parVals[parNames[k]]) // this parameter is undefined
                warnings[warnings.length] = 'the parameter ' + parNames[k] + ' is defined in the table, but not defined or fixed in the model';

        outTA.value = ''; // clear the given starting values

        /*
         //  parse observed values table
         */
        var tmp = inpTA.value;
        // clean up the table to make sure its in a standard format of \t column separartors and \n line seperators
        tmp = cleanUpTable(tmp);
        tmp = tmp.replace(/\n\t/g,'\n'); // remove \t at start of a line (causes error)
        tmp = tmp.replace(/\s+$/g,'');   // remove trailing whitespaces  (causes warning)
        tmp = tmp.split(/\n/); 
        var head = tmp.shift(), tail = tmp.join('\n');
        var obsNames = head.replace(/\t$/g,'').split(/\t/g);     // column names
        var obsRows = tail.replace(/\t\n$/g,'\n').split(/\n/g);  // rows containing the observed values

        // check if the observed values labels are defined in the model, if not, issue only warnings that indicate which are not
        for(var k=0; k<obsNames.length; k++)
            if(!obsVals[obsNames[k]]) // this parameter is undefined
                warnings[warnings.length] = 'the observed values label ' + obsNames[k] + ' is defined in the table, but not in the model';

        /*
         // cycle over all the cases in the table, solving for the parameters in the model equations with each 
         */

        // write out the table header
        for(var i=0; i < aParams.length; i++)
            if(!aParams[i].isFixed()) outTA.value += sprintf( frmth, aParams[i].name);
        // outTA.value += sprintf( '    //  #15s #15s ', 'Discrepancy', 'iterations');
        outTA.value += '\n'
        
        // process each case in the table
        for(var j=0; j<obsRows.length; j++){ 

            // skip out commented rows
            if(obsRows[j].match(/^\/\//||/^\s+$/)){ // allow commenting out rows with '//'
                // inpTA.value += obsRows[j].replace(/\t/g,' ') + '\n';
                outTA.value += '//' + parRows[j].replace(/\t/g,' ').replace(/^\s*\/\//,'') + '\n';
                continue;
            }

            /* 
             // sets the model parameters to the starting values specified in this row
             */
            var parValues = (parRows[j] ? parRows[j].split(/\t/g) : ''); 
            var tmpval = 0;
            ParamSave(); // store the current parameter values
            for(var k=0; k < parNames.length; k++){
                if(typeof parVals[parNames[k]]=='undefined') continue; 
                tmpval = parseFloat(parValues[k]); 
                if(!isNaN(tmpval)) 
                    parVals[parNames[k]].setValue(tmpval);                
                else{
                    // warnings[warnings.length] = 'Parsed NaN in row '+(j+1)+', column '+(k+1)+' of parameter table';
                    break;
                }
            }
            if(isNaN(tmpval)){
                ParamRestore(); // use same starting values as the previous case
            }
            else{
                // ParamSave stores previous starting values in this global, they have to removed by hand if not restored
                paramSaveStack.pop(); 
            }

            /*
              // sets the Predicted-Observed Pairs values to the values specified in this row
              */
            var obsValues = obsRows[j].split(/\t/g); 
            var tmpval = 0;
            for(var k=0; k < obsNames.length; k++){ // k start at 1 because the first element is always empty (?)
                if(typeof obsVals[obsNames[k]]=='undefined') continue; // undefined observed values cannot be set...
                tmpval = parseFloat(obsValues[k])
                if(!isNaN(tmpval))
                    obsVals[obsNames[k]].setObserved(tmpval);
                else{ 
                    warnings[warnings.length] = '\''+obsValues[k].replace(/\t/g,'\\t').replace(/\n/g,'\\n')+'\' parsed to NaN in row '+(j+1)+', column '+(k+1);
                    break;
                }
            }
            if(isNaN(tmpval)){ // parameters cannot be estimated for this row
                outTA.value += '// NaN parsed for this case, skipping this case \n'
                continue; // continue to next row in loop over table rows
            }

            /*
              // solve for the parameters in the model equations with the observed values in this row
              */
            solver(true /* accept solution automatically */);
            
            for(var i=0; i < aParams.length; i++)
                if(!aParams[i].isFixed()) outTA.value += sprintf( frmtb, aParams[i].getValue());
            outTA.value += sprintf( '    //  #15.8g #15d ', parseFloat($('objf_val').value), theLastSolver.funevals());
            outTA.value += '\n'; 
        }
        $('batchwarningsconsole').innerHTML = warnings.join('<br />');
    }
    catch(e){
        $('batchwarningsconsole').innerHTML = warnings.join('<br />');
        alert(e.description || e);
    }
    HideRunning(); // how ugly... (Data2EZ2 is called with setTimeout to let ShowRunning take effect)
}
