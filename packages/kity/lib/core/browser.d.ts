export interface Browser {
  /**
   * @property platform
   * @description 获取浏览器所在系统,"Win"->Windows;"Mac"->Mac;"Lux"->Linux
   * @type { string }
   */
  platform: 'Win' | 'Mac';

  /**
   * 猎豹,区分两种不同内核
   */
  lb: boolean;

  /**
   * 搜狗
   */
  sg: boolean;

  /**
   * 百度
   */
  bd: boolean;

  /**
   * edge浏览器
   */
  edge: boolean;

  /**
   * chrome初始化为false
   * @type {boolean}
   */
  chrome: boolean;

  /**
   * @property opera
   * @for kity.Browser
   * @description 判断是否为 Opera 浏览器
   * @type {boolean}
   */
  opera: boolean;

  /**
   * @property ie
   * @for kity.Browser
   * @description 判断是否为 IE 浏览器
   * @type {boolean}
   */
  ie: boolean;

  /**
   * @property webkit
   * @for kity.Browser
   * @description 判断是否为 Webkit 内核的浏览器
   * @type {boolean}
   */
  webkit: boolean;

  /**
   * @property gecko
   * @for kity.Browser
   * @description 判断是否为 Gecko 内核的浏览器
   * @type {boolean}
   */
  gecko: boolean;

  /**
   * @property mac
   * @for kity.Browser
   * @description 判断是否为 Mac 下的浏览器
   * @type {boolean}
   */
  mac: boolean;

  /**
   * @description 是否兼容 ie >= 6; gecko >= 10801; opera >= 9.5; air >= 1; webkit >= 522;
   */
  isCompatible: boolean;

  /**
   * @property version
   * @for kity.Browser
   * @description 获取当前浏览器的版本
   * @type {number}
   */
  version: number;
}
