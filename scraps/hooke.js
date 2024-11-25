/* Nonlinear Optimization using the algorithm of Hooke and Jeeves  */
/*  12 February 1994    author: Mark G. Johnson                    */
/*  26 November 2005    author Javascript: Raoul P.P.P. Grasman    */

/* Find a point X where the nonlinear function f(X) has a local    */
/* minimum.  X is an n-vector and f(X) is a scalar.  In mathe-     */
/* matical notation  f: R^n -> R^1.  The objective function f()    */
/* is not required to be continuous.  Nor does f() need to be      */
/* differentiable.  The program does not use or require            */
/* derivatives of f().                                             */

/* The software user supplies three things: a subroutine that      */
/* computes f(X), an initial "starting guess" of the minimum point */
/* X, and values for the algorithm convergence parameters.  Then   */
/* the program searches for a local minimum, beginning from the    */
/* starting guess, using the Direct Search algorithm of Hooke and  */
/* Jeeves.                                                         */

/* This JavaScript program is adapted from the C-code of Mark G.   */
/* Johnson found at statlib, which is adapted from the Algol       */
/* pseudocode found in "Algorithm 178: Direct Search" by Arthur F. */
/* Kaupe Jr., Communications of the ACM, Vol 6. p.313 (June 1963). */
/* It includes the improvements suggested by Bell and Pike         */
/* (CACM v.9, p. 684, Sept 1966) and those of Tomlin and Smith,    */
/* "Remark on Algorithm 178" (CACM v.12).  The original paper,     */
/* which is not as highly recommended as the one by A. Kaupe, is:  */
/* R. Hooke and T. A. Jeeves, "Direct Search Solution of Numerical */
/* and Statistical Problems", Journal of the ACM, Vol. 8, April    */
/* 1961, pp. 212-229.                                              */

/* Javascript usage:                                               */
/* var a;                                                          */
/* function f(x){ return x[0]^2 +x[1]^2                            */
/* f.title = 'Test function'                                       */
/* a = new Hooke(f); // create a new minimization object           */
/*                   // f is the function to be minimized          */
/*                   // see the description of f below             */
/*                                                                 */
/* a.startpt = []; // { array of doubles } this sets the           */
/*                 // starting point of the search; its length     */
/*                 // property will determine the dimension of     */
/*                 // the search space                             */
/*                                                                 */
/* a.main();       // this starts the minimization, it may freeze  */
/*                 // the window until the search has converged    */
/*                                                                 */
/* a.endpt;        // { array of doubles } this array contains     */
/*                 // the coordinates of the minimum of f

/* Hooke object properties                                         */
/*                                                                 */
/* a.VARS         number of variables to be estimated; not used    */
/* a.RHO_BEGIN    convergence control parameter; see below         */
/* a.EPSMIN       convergence test parameter; see below            */
/* a.IMAX         Maximum number of iterations                     */
/* a.startpt      Starting point                                   */
/* a.endpt        Coordinates of minimum of objective function f   */
/*                after main( ) has been called                    */
/* a.objf         objective function f                             */
/*                                                                 */
/*                                                                 */
/* Hooke object methods                                            */
/*                                                                 */
/* a.funevals( )         total number of function evaluations      */
/* a.setConsole( obj )   associates the HTML element obj with a    */
/*                       console buffer, to which convergence info */
/*                       is written (using the obj.innerHTML       */
/*                       property); defaults to to document.body   */
/*                       if it is set to null, no console output   */
/*                       is displayed; if f has a title property,  */
/*                       the title is written to the console       */
/*                       buffer.                                   */
/* a.getConsoleOutput()  Get the content of the console buffer     */
/* a.main( )             Search minimum of objective function f    */
/*                                                                 */
/*                                                                 */

/* Calling sequence: (for JavaScript internal use only)            */
/*  int hooke(nvars, startpt, endpt, rho, epsilon, itermax)        */
/*                                                                 */
/*     nvars {an integer}  This is the number of dimensions        */
/*           in the domain of f().  It is the number of            */
/*           coordinates of the starting point (and the            */
/*           minimum point.)                                       */
/*     startpt {an array of doubles}  This is the user-            */
/*           supplied guess at the minimum.                        */
/*     endpt {an array of doubles}  This is the location of        */
/*           the local minimum, calculated by the program          */
/*     rho   {a double}  This is a user-supplied convergence       */
/*           parameter (more detail below), which should be        */
/*           set to a value between 0.0 and 1.0.    Larger         */
/*           values of rho give greater probability of             */
/*           convergence on highly nonlinear functions, at a       */
/*           cost of more function evaluations.  Smaller           */
/*           values of rho reduces the number of evaluations       */
/*           (and the program running time), but increases         */
/*           the risk of nonconvergence.    See below.             */
/*     epsilon {a double}  This is the criterion for halting       */
/*           the search for a minimum.  When the algorithm         */
/*           begins to make less and less progress on each         */
/*           iteration, it checks the halting criterion: if        */
/*           the stepsize is below epsilon, terminate the          */
/*           iteration and return the current best estimate        */
/*           of the minimum.  Larger values of epsilon (such       */
/*           as 1.0e-4) give quicker running time, but a           */
/*           less accurate estimate of the minimum.  Smaller       */
/*           values of epsilon (such as 1.0e-7) give longer        */
/*           running time, but a more accurate estimate of         */
/*           the minimum.                                          */
/*     itermax {an integer}  A second, rarely used, halting        */
/*           criterion.  If the algorithm uses >= itermax          */
/*           iterations, halt.                                     */


/* The user-supplied objective function f(x,n) should return a C   */
/* "double".  Its  arguments are  x -- an array of doubles, and    */
/* n -- an integer.  x is the point at which f(x) should be        */
/* evaluated, and n is the number of coordinates of x.  That is,   */
/* n is the number of coefficients being fitted.                   */

/* rho, the algorithm convergence control                          */
/*  The algorithm works by taking "steps" from one estimate of     */
/*    a minimum, to another (hopefully better) estimate.  Taking   */
/*    big steps gets to the minimum more quickly, at the risk of   */
/*    "stepping right over" an excellent point.  The stepsize is   */
/*    controlled by a user supplied parameter called rho.  At each */
/*    iteration, the stepsize is multiplied by rho  (0 < rho < 1), */
/*    so the stepsize is successively reduced.                     */
/*  Small values of rho correspond to big stepsize changes,        */
/*    which make the algorithm run more quickly.  However, there   */
/*    is a chance (especially with highly nonlinear functions)     */
/*    that these big changes will accidentally overlook a          */
/*    promising search vector, leading to nonconvergence.          */
/*  Large values of rho correspond to small stepsize changes,      */
/*    which force the algorithm to carefully examine nearby points */
/*    instead of optimistically forging ahead.  This improves the  */
/*    probability of convergence.                                  */
/*  The stepsize is reduced until it is equal to (or smaller       */
/*    than) epsilon.  So the number of iterations performed by     */
/*    Hooke-Jeeves is determined by rho and epsilon:               */
/*      rho**(number_of_iterations) = epsilon                      */
/*  In general it is a good idea to set rho to an aggressively     */
/*    small value like 0.5 (hoping for fast convergence).  Then,   */
/*    if the user suspects that the reported minimum is incorrect  */
/*    (or perhaps not accurate enough), the program can be run     */
/*    again with a larger value of rho such as 0.85, using the     */
/*    result of the first minimization as the starting guess to    */
/*    begin the second minimization.                               */

/* Normal use: (1) Code your function f() in JavaScript            */
/*             (2) Install your starting guess {or read it in}     */
/*             (3) Run the program                                 */
/*             (4) {for the skeptical}: Use the computed minimum   */
/*                 as the starting point for another run           */

/* Data Fitting:                                                   */
/*  Code your function f() to be the sum of the squares of the     */
/*  errors (differences) between the computed values and the       */
/*  measured values.  Then minimize f() using Hooke-Jeeves.        */
/*  EXAMPLE: you have 20 datapoints (ti, yi) and you want to       */
/*  find A,B,C such that  (A*t*t) + (B*exp(t)) + (C*tan(t))        */
/*  fits the data as closely as possible.  Then f() is just        */
/*  f(x) = SUM (measured_y[i] - ((A*t[i]*t[i]) + (B*exp(t[i]))     */
/*          + (C*tan(t[i]))))^2                                    */
/*  where x[] is a 3-vector consisting of {A, B, C}.               */

/*                                                                 */
/*  The author of this software is M.G. Johnson.                   */
/*  Permission to use, copy, modify, and distribute this software  */
/*  for any purpose without fee is hereby granted, provided that   */
/*  this entire notice is included in all copies of any software   */
/*  which is or includes a copy or modification of this software   */
/*  and in all copies of the supporting documentation for such     */
/*  software.  THIS SOFTWARE IS BEING PROVIDED "AS IS", WITHOUT    */
/*  ANY EXPRESS OR IMPLIED WARRANTY.  IN PARTICULAR, NEITHER THE   */
/*  AUTHOR NOR AT&T MAKE ANY REPRESENTATION OR WARRANTY OF ANY     */
/*  KIND CONCERNING THE MERCHANTABILITY OF THIS SOFTWARE OR ITS    */
/*  FITNESS FOR ANY PARTICULAR PURPOSE. See the GNU General Public */
/*  License for more details.                                      */

/*  The author of this JavaScript port is R.P.P.P. Grasman.        */
/*  This JavaScript implementation is distributed under the GNU    */
/*  General Public License. Copyright 2005 Raoul Grasman.          */
/*  This program is free software; you can redistribute it and/or  */
/*  modify it under the terms of the GNU General Public License as */
/*  published by the Free Software Foundation; either version 2 of */
/*  the License, or (at your option) any later version.            */

/*  If you publish scientific work using this software, please     */
/*  acknowledge this software with a reference, including the url: */
/*                                                                 */
/*  Grasman, R.P.P.P. (2005) Javascript implementation of hooke -- */
/*  the Hooke and Jeeves algorithm for minimization.               */
/*  http://purl.oclc.org/NET/rgrasman/jscript/hooke.js             */


function Hooke(objf) {
  this.VARS = 250; /* max # of variables */
  this.RHO_BEGIN = 0.5; /* stepsize geometric shrink */
  this.EPSMIN = 1E-6; /* ending value of stepsize */
  this.IMAX = 5000; /* max # of iterations */

  /* Global variables */
  funevals = 0;
  let consoleOutput = '';
  const console = window.document.body;

  /* Object methods */
  this.funevals = function funevals() { return funevals; };
  this.setConsole = function setConsole(obj) { console = obj; };
  this.getConsoleOutput = function getConsoleOutput() { return consoleOutput; };

  /* C-aliases to JavaScript functions */
  const fabs = Math.abs;
  const printf = function printf(format) {
    for (let i = 1; i < arguments.length; i += 1) {
      const m = format.match(/%(\d+)*(\.\d+)*([a-z]{1,2})/);
      format = format.replace(
        (new RegExp(m[0])),
        ((m[3] === 'd')
          ? arguments[i]
          : ((m[2])
            ? arguments[i].toPrecision(m[2].replace(/\./, ''))
            : arguments[i].toPrecision(m[1]))),
      );
    }
    consoleOutput += format.replace(/\n/g, '\r\n');
    if (console) {
      console.innerHTML += format.replace(/\n/g, '<br/>');
    }
  };


  /* Rosenbrocks classic parabolic valley ("banana") function */
  // input: double x[this.VARS];
  //        int    n;
  function f(x, n) {
    funevals += 1;
    const a = x[0];
    const b = x[1];
    const c = 100.0 * (b - (a * a)) * (b - (a * a));
    return (c + ((1.0 - a) * (1.0 - a)));
  }
  f.title = 'Rosenbrocks classic parabolic valley ("banana") function';
  if (arguments.length > 0 && (objf instanceof Function)) {
    f = function f(x, n) {
      funevals += 1;
      return objf(x, n);
    };
    f.title = objf.title;
  }
  this.objf = objf;

  /* given a point, look for a better one nearby, one coord at a time */
  function best_nearby(delta, point, prevbest, nvars) {
  // input:  double delta[this.VARS], point[this.VARS];
  //         double prevbest;
  //         int    nvars;
  // output: double
    try {
      const z = new Array(this.VARS); // double
      let minf; // double
      let ftmp; // double
      let i; // int
      minf = prevbest;
      for (i = 0; i < nvars; i += 1) {
        z[i] = point[i];
      }
      for (i = 0; i < nvars; i += 1) {
        z[i] = point[i] + delta[i];
        ftmp = f(z, nvars);
        if (ftmp < minf) {
          minf = ftmp;
        } else {
          delta[i] = 0.0 - delta[i];
          z[i] = point[i] + delta[i];
          ftmp = f(z, nvars);
          if (ftmp < minf) {
            minf = ftmp;
          } else {
            z[i] = point[i];
          }
        }
      }
      for (i = 0; i < nvars; i += 1) {
        point[i] = z[i];
      }
      return minf;
    } catch (__error__) {
      return `Error in best_nearby: ${__error__}`;
    }
  }


  // input: double   startpt[this.VARS], endpt[this.VARS]
  //        int      nvars, itermax
  //        double   rho, epsilon
  // output: int
  function hooke(nvars, startpt, endpt, rho, epsilon, itermax) {
    try {
      const delta = new Array(this.VARS); // double
      let newf; // double
      let fbefore; // double
      let steplength; // double
      let tmp; // double
      const xbefore = new Array(this.VARS); // double
      const newx = new Array(this.VARS); // double
      let i; // int
      let j; // int
      let keep; // int
      let iters; // int
      let iadj; // int

      for (i = 0; i < nvars; i += 1) {
        xbefore[i] = startpt[i];
        newx[i] = xbefore[i];
        delta[i] = fabs(startpt[i] * rho);
        if (delta[i] === 0.0) {
          delta[i] = rho;
        }
      }
      iadj = 0;
      steplength = rho;
      iters = 0;
      fbefore = f(newx, nvars);
      newf = fbefore;
      while ((iters < itermax) && (steplength > epsilon)) {
        iters += 1;
        iadj += 1;
        printf('\nAfter %5d funevals, f(x) =  %.4le at\t', funevals, fbefore);
        for (j = 0; j < nvars; j += 1) {
          printf('  x[%2d] = %.6le\t', j, xbefore[j]);
        }
        /* find best new point, one coord at a time */
        for (i = 0; i < nvars; i += 1) {
          newx[i] = xbefore[i];
        }
        newf = best_nearby(delta, newx, fbefore, nvars);
        /* if we made some improvements, pursue that direction */
        keep = 1;
        while ((newf < fbefore) && (keep === 1)) {
          iadj = 0;
          for (i = 0; i < nvars; i += 1) {
            /* firstly, arrange the sign of delta[] */
            if (newx[i] <= xbefore[i]) {
              delta[i] = 0.0 - fabs(delta[i]);
            } else {
              delta[i] = fabs(delta[i]);
            }
            /* now, move further in this direction */
            tmp = xbefore[i];
            xbefore[i] = newx[i];
            newx[i] = newx[i] + newx[i] - tmp;
          }
          fbefore = newf;
          newf = best_nearby(delta, newx, fbefore, nvars);
          /* if the further (optimistic) move was bad.... */
          if (newf >= fbefore) {
            break;
          }
          /* make sure that the differences between the new */
          /* and the old points are due to actual */
          /* displacements; beware of roundoff errors that */
          /* might cause newf < fbefore */
          keep = 0;
          for (i = 0; i < nvars; i += 1) {
            keep = 1;
            if (fabs(newx[i] - xbefore[i]) > (0.5 * fabs(delta[i]))) {
              break;
            } else {
              keep = 0;
            }
          }
        }
        if ((steplength >= epsilon) && (newf >= fbefore)) {
          steplength *= rho;
          for (i = 0; i < nvars; i += 1) {
            delta[i] *= rho;
          }
        }
      }
      for (i = 0; i < nvars; i += 1) {
        endpt[i] = xbefore[i];
      }
      return (iters);
    } catch (__error__) {
      return `Error in hooke: ${__error__}`;
    }
  }

  /* Object properties */
  this.startpt = []; // double
  this.endpt = []; // double

  /* starting guess for rosenbrock test function */
  this.startpt[0] = -1.2;
  this.startpt[1] = 1.0;

  this.main = function main() {
    if (f.title) {
      consoleOutput += `${f.title}\n`;
      if (console) {
        console.innerHTML += `${f.title}<br />`;
      }
    }

    try {
      const startpt = new Array(this.VARS); // double
      const endpt = new Array(this.VARS); // double

      const nvars = this.startpt.length;
      for (let i = 0; i < nvars; i += 1) {
        startpt[i] = this.startpt[i];
      }

      const itermax = this.IMAX;
      const rho = this.RHO_BEGIN;
      const epsilon = this.EPSMIN;
      const jj = hooke(nvars, startpt, endpt, rho, epsilon, itermax);
      printf('\n\n\nHOOKE USED %d ITERATIONS, AND RETURNED\r\n ', jj);
      for (let i = 0; i < nvars; i += 1) {
        printf('x[%3d] = %15.7le \n', i, endpt[i]);
        this.endpt[i] = endpt[i];
      }
      printf('\n\n');
    } catch (__error__) {
      return `Error in main: ${__error__} `;
    }
  };
}

/* The Hooke & Jeeves algorithm works reasonably well on
 * Rosenbrock's function, but can fare worse on some
 * standard test functions, depending on rho.  Here is an
 * example that works well when rho = 0.5, but fares poorly
 * with rho = 0.6, and better again with rho = 0.8.
 */


/* Woods -- a la More, Garbow & Hillstrom (TOMS algorithm 566) */

/*

double
f(x, n)
  double x[this.VARS];
  int n;
{
  double s1, s2, s3, t1, t2, t3, t4, t5;
  funevals++;
  s1 = x[1] - x[0]*x[0];
  s2 = 1 - x[0];
  s3 = x[1] - 1;
  t1 = x[3] - x[2]*x[2];
  t2 = 1 - x[2];
  t3 = x[3] - 1;
  t4 = s3 + t3;
  t5 = s3 - t3;
  return 100*(s1*s1) + s2*s2 + 90*(t1*t1) + t2*t2
    + 10*(t4*t4) + t5*t5/10.;
}

main()
{
  double startpt[this.VARS], endpt[this.VARS];
  int nvars, itermax;
  double rho, epsilon;
  int i, jj;

  // starting guess test problem "Woods" //
  nvars = 4;
  startpt[0] = -3;
  startpt[1] = -1;
  startpt[2] = -3;
  startpt[3] = -1;

  itermax = this.IMAX;
  rho = RHO_WOODS;
  epsilon = this.EPSMIN;
  jj = hooke(nvars, startpt, endpt, rho, epsilon, itermax);
  printf("\n\n\nHOOKE USED %d ITERATIONS, AND RETURNED\n", jj);
  for (i = 0; i < nvars; i++)
    printf("x[%3d] = %15.7le \n", i, endpt[i]);
  printf("True answer: f(1, 1, 1, 1) = 0.\n");
}

*/
