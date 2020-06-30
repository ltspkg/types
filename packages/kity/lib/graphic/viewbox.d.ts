interface ViewBoxParam {
  x: number;
  y: number;
  width: number;
  height: number;
}
/**
 * @class ViewBox
 * @description 视图盒子
 */
export class ViewBox {
  /**
   * @method getViewBox
   * @description 获取视图盒子坐标和大小
   */
  public getViewBox(): ViewBoxParam;

  /**
   * @method setViewBox
   * @description 设置视图盒子坐标和大小
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  public setViewBox(x: number, y: number, width: number, height: number): ViewBox;
}
