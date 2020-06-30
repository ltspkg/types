import { Shape } from "./shape";
import { Color } from "./color";

/**
 * @class Pen
 * @description 表示一只画笔
 */
export class Pen {
  /**
   * @constructor
   * @param  {Color} brush 颜色
   * @param  {number} width 粗细
   */
  public constructor(brush: Color, width: number);

  /**
   * @method getBrush()
   * @description 获取画笔颜色
   */
  public getBrush(): Color;

  /**
   * @method setBrush()
   * @description 设置画笔颜色
   * @param { Color } brush
   */
  public setBrush(brush: Color): Pen;

  /**
   * @method setColor()
   * @description 设置画笔颜色
   * @param { Color } color
   */
  public setColor(color: Color): Pen;

  /**
   * @method getColor()
   * @description 获取画笔颜色
   */
  public getColor(): Color;

  /**
   * @method getWidth()
   * @description 获取画笔宽度
   */
  public getWidth(): number;

  /**
   * @method setWidth()
   * @description 设置画笔宽度
   * @param { number } width
   */
  public setWidth(width: number): Pen;

  /**
   * @method getOpacity()
   * @description 获取透明度
   */
  public getOpacity(): number;

  /**
   * @method setOpacity()
   * @description 设置透明度
   * @param { numbe } opacity
   */
  public setOpacity(opacity: number): void;

  /**
   * @method getLineCap()
   * @description 获取lineCap
   */
  public getLineCap(): string;

  /**
   * @method setLineCap()
   * @description 设置lineCap
   * @param { string } lineCap
   */
  public setLineCap(lineCap: string): Pen;

  /**
   * @method getLineJoin()
   * @description 获取lineJoin
   */
  public getLineJoin(): string;

  /**
   * @method setLineJoin()
   * @description 设置linejoin
   * @param { string } linejoin
   */
  public setLineJoin(linejoin: string): Pen;

  /**
   * @method getDashArray()
   * @description 获取dashArray
   */
  public getDashArray(): string | number;

  /**
   * @method setDashArray()
   * @description 设置dashArray
   * @param { string | number } dashArray
   */
  public setDashArray(dashArray: string | number): Pen;

  /**
   * @method stroke()
   * @description stroke shape
   * @param { Shape } shape
   */
  public stroke(shape: Shape): void;
}
