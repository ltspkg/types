/*! *****************************************************************************
Copyright (c) 2020 ltspkg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

declare namespace kity {
  /**
   * @class Pen
   * @description 表示一只画笔
   */
  class Pen {
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
}
