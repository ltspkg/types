/**
 * @class Styled
 * @description 样式类
 */
export class Styled {
  /**
   * @method addClass
   * @description 增加样式class
   * @param {string} name
   */
  public addClass(name: string): Styled;

  /**
   * @method removeClass
   * @description 移除样式class
   * @param {string} name
   */
  public removeClass(name: string): Styled;

  /**
   * @method hasClass
   * @description 是否存在某样式类
   * @param {string} name
   */
  public hasClass(name: string): boolean;

  /**
   * @method hasClass
   * @description 是否存在某样式类
   * @param {string} name
   */
  public setStyle(styles: object): Styled;
  public setStyle(key: string, value: any): Styled;
}
