
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
  static hm2hr(h, m) {
    if ((h === 0) && (m === 0)) {
      return 0;
    }
    return h / (h + m);
  }

  static facr2far(fa, cr) {
    if ((fa === 0) && (cr === 0)) {
      return 0;
    }
    return fa / (fa + cr);
  }

  static hmfacr2acc(h, m, fa, cr) {
    if ((h === 0) && (m === 0) && (fa === 0) && (cr === 0)) {
      return 0;
    }
    return (h + cr) / (h + m + fa + cr);
  }

  static hrfar2acc(hr, far) {
    return (hr + (1 - far)) / 2;
  }

  static hfa2ppv(h, fa) {
    if ((h === 0) && (fa === 0)) {
      return 0;
    }
    return h / (h + fa);
  }

  static mcr2fomr(m, cr) {
    if ((m === 0) && (cr === 0)) {
      return 0;
    }
    return m / (m + cr);
  }

  static hrfar2d(hr, far, s = 1) {
    if (s === 1) return (jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1));
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s * jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1))
    );
  }

  static hrfar2c(hr, far, s = 1) {
    if (s === 1) return (-(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1)) / 2);
    return (
      Math.sqrt(2 / (s * s + 1))
      * (s / (s + 1))
      * -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1))
    );
  }

  static dc2hr(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d / 2 - c, 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1));
  }

  static dc2far(d, c, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(d / 2 + c), 0, 1));
    return (jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1));
  }

  static dfar2hr(d, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(d + jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      (Math.sqrt((s * s + 1) / 2) * d + jStat.normal.inv(far, 0, 1)) / s,
      0,
      1,
    ));
  }

  static cfar2hr(c, far, s = 1) {
    if (s === 1) return (jStat.normal.cdf(-(2 * c) - jStat.normal.inv(far, 0, 1), 0, 1));
    return (jStat.normal.cdf(
      -Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jStat.normal.inv(far, 0, 1),
      0,
      1,
    ));
  }

  static d2muN(d, s = 1) {
    if (s === 1) return -d / 2;
    return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
  }

  static muN2d(muN, s = 1) {
    if (s === 1) return -2 * muN;
    return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
  }

  static d2muS(d, s = 1) {
    if (s === 1) return d / 2;
    return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
  }

  static muS2d(muS, s = 1) {
    if (s === 1) return 2 * muS;
    return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
  }

  static c2l(c, s = 1) {
    if (s === 1) return c;
    return Math.sqrt((s * s + 1) / 2) * c;
  }

  static l2c(l, s = 1) {
    if (s === 1) return l;
    return Math.sqrt(2 / (s * s + 1)) * l;
  }

  static s2h(s = 1) {
    return 1 / (s * Math.sqrt(2 * Math.PI));
  }

  static h2s(h) {
    return 1 / (h * Math.sqrt(2 * Math.PI));
  }

  static hr2zhr(hr) {
    return jStat.normal.inv(hr, 0, 1);
  }

  static far2zfar(far) {
    return jStat.normal.inv(far, 0, 1);
  }

  static zhr2hr(zhr) {
    return jStat.normal.cdf(zhr, 0, 1);
  }

  static zfar2far(zfar) {
    return jStat.normal.cdf(zfar, 0, 1);
  }
}
