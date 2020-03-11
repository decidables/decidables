
import * as jStat from 'jstat';

/*
  SDTMath Static Class - Not intended for instantiation!

  Variables:
    H = hits
    M = misses
    FA = false alarms
    CR = correct rejections
    HR = hit rate
    FAR = false alarm rate
    ACC = accuracy
    PPV = positive predictive value
    FOMR = false omission rate (used FOMR to avoid keyword FOR!)
    d = sensitivity (d' for equal variance, d_a for unequal variance)
    c = response bias (c for equal variance, c_a for unequal variance)
    s = standard deviation of signal distribution, with standard deviation of noise distribution = 1
    muN = mean of noise distribution
    muS = mean of signal distribution
    l = lambda, threshold location, with l = 0 indicating no response bias
    h = height of signal distribution

  Equations (* = unequal variance):
    HR = H / (H + M)
    FAR = FA / (FA + CR)
    ACC = (H + CR) / (H + M + FA + CR)
    ACC = (HR + (1 - FAR)) / 2
    PPV = H / (H + FA)
    FOMR = M / (M + CR)

    d' = Z^-1(HR) - Z^-1(FAR)
    *d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))

    c = -(Z^-1(HR) + Z^-1(FAR))/2
    *c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))

    HR = Z(d'/2 - c)
    *HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))

    FAR = Z(-d'/2 - c)
    *FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))

    HR = Z(d' + Z^-1(FAR))
    *HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)

    HR = Z(-2c - Z^-1(FAR))
    *HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))

    muN = -d'/2
    *muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'

    d' = -2 * muN
    *d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN

    muS = d'/2
    *muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'

    d' = 2 * muS
    *d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS

    l = c
    l = ((s^2 + 1) / 2)^(1/2) * c

    c = l
    c = (2 / (s^2 + 1))^(1/2) * l

    h = 1 / (s * (2 * pi)^(1/2))
    s = 1 / (h * (2 * pi)^(1/2))
*/
export default class SDTMath {
  static hM2Hr(h, m) {
    if ((h === 0) && (m === 0)) {
      return 0;
    }
    return h / (h + m);
  }

  static faCr2Far(fa, cr) {
    if ((fa === 0) && (cr === 0)) {
      return 0;
    }
    return fa / (fa + cr);
  }

  static hMFaCr2Acc(h, m, fa, cr) {
    if ((h === 0) && (m === 0) && (fa === 0) && (cr === 0)) {
      return 0;
    }
    return (h + cr) / (h + m + fa + cr);
  }

  static hrFar2Acc(hr, far) {
    return (hr + (1 - far)) / 2;
  }

  static hFa2Ppv(h, fa) {
    if ((h === 0) && (fa === 0)) {
      return 0;
    }
    return h / (h + fa);
  }

  static mCr2Fomr(m, cr) {
    if ((m === 0) && (cr === 0)) {
      return 0;
    }
    return m / (m + cr);
  }

  static hrFar2D(hr, far, s = 1) {
    if (s === 1) return (jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1));
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s * jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1))
    );
  }

  static hrFar2C(hr, far, s = 1) {
    if (s === 1) return (-(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1)) / 2);
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s / (s + 1))
      * -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1))
    );
  }

  static dC2Hr(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d / 2 - c, 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1));
  }

  static dC2Far(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(d / 2 + c), 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1));
  }

  static dFar2Hr(d, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d + jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      (Math.sqrt((s * s + 1) / 2) * d + jStat.normal.inv(far, 0, 1)) / s,
      0,
      1,
    ));
  }

  static cFar2Hr(c, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(2 * c) - jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      -Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jStat.normal.inv(far, 0, 1),
      0,
      1,
    ));
  }

  static d2MuN(d, s = 1) {
    if (s === 1) return -d / 2;
    return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
  }

  static muN2D(muN, s = 1) {
    if (s === 1) return -2 * muN;
    return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
  }

  static d2MuS(d, s = 1) {
    if (s === 1) return d / 2;
    return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
  }

  static muS2D(muS, s = 1) {
    if (s === 1) return 2 * muS;
    return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
  }

  static c2L(c, s = 1) {
    if (s === 1) return c;
    return Math.sqrt((s * s + 1) / 2) * c;
  }

  static l2C(l, s = 1) {
    if (s === 1) return l;
    return Math.sqrt(2 / (s * s + 1)) * l;
  }

  static s2H(s = 1) {
    return 1 / (s * Math.sqrt(2 * Math.PI));
  }

  static h2S(h) {
    return 1 / (h * Math.sqrt(2 * Math.PI));
  }

  static hr2Zhr(hr) {
    return jStat.normal.inv(hr, 0, 1);
  }

  static far2Zfar(far) {
    return jStat.normal.inv(far, 0, 1);
  }

  static zhr2Hr(zhr) {
    return jStat.normal.cdf(zhr, 0, 1);
  }

  static zfar2Far(zfar) {
    return jStat.normal.cdf(zfar, 0, 1);
  }
}
