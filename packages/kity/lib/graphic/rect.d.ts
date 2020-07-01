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

  class Rect extends Path {
    /**
     * @constructor
     * @for kity.Rect
     * @grammar new kity.Rect(width, height, x, y, radius)
     * @param  {number} width  矩形的初始化宽度
     * @param  {number} height 矩形的初始化高度
     * @param  {number} x      矩形的初始化 x 坐标
     * @param  {number} y      矩形的初始化 y 坐标
     * @param  {number} radius 矩形的初始化圆角大小
     */
    public constructor(
      width: number,
      height: number,
      x: number,
      y: number,
      radius: number
    );

    /**
     * @method update()
     * @for kity.Rect
     *
     * @description 更新图形
     */
    public update(): Rect;

    /**
     * @method setWidth
     * @for kity.Rect
     * @grammar setWidth(width) => kity.Rect
     * @description 设置矩形的宽度，设置后返回矩形实例本身
     * @param {number} width 宽度值
     *
     * @example
     * ```js
     * rect.setWidth(300);
     * ```
     */
    public setWidth(width: number): Rect;

    /**
     * @method setHeight
     * @for  kity.Rect
     * @grammar setHeight(height) => kity.Rect
     * @description 设置矩形的高度，设置后返回矩形实例本身
     * @param {Number} height 高度值
     *
     * @example
     * ```js
     * rect.setHeight(200);
     * ```
     */
    public setHeight(height: number): Rect;

    /**
     * @method setSize
     * @for  kity.Rect
     * @grammar setSize(width, height) => kity.Rect
     * @description 设置矩形的尺寸，设置后返回矩形本身
     * @param {Number} width  矩形的宽度值
     * @param {Number} height 矩形的高度值
     *
     * @example
     * ```js
     * rect.setSize(300, 200);
     * ```
     */
    public setSize(width: number, height: number): Rect;

    /**
     * @method setBox
     * @for kity.Rect
     * @grammar setBox(box) => kity.Rect
     * @description 使用一个 kity 的盒子数据，
     * @param {kity.Box} box 盒子数据
     */
    public setBox(box: Box): Rect;

    /**
     * @method getBox
     * @for kity.Rect
     * @grammar getBox() => Box
     * @description 获取一个 kity 的盒子数据，
     */
    public getBox(): Box;

    /**
     * @method getRadius()
     * @for kity.Rect
     * @grammar getRadius() => number
     * @description 获取矩形的圆角
     */
    public getRadius(): number;

    /**
     * @method setRadius()
     * @for kity.Rect
     * @grammar setRadius(radius) => kity.Rect
     * @description 设置矩形的圆角
     * @param {number} radius
     */
    public setRadius(radius: number): Rect;

    /**
     * @method getPosition()
     * @for kity.Rect
     * @grammar getPosition() => Point
     * @description 获取矩形位置
     */
    public getPosition(): Point;

    /**
     * @method setPosition()
     * @for kity.Rect,
     * @grammar setPosition(x, y) => kity.Rect
     * @description 设置矩形位置
     */
    public setPosition(x: number, y: number): Rect;

    /**
     * @method getWidth()
     * @for kity.Rect,
     * @grammar getWidth(x, y) => number
     * @description 获取矩形宽度
     */
    public getWidth(): number;

    /**
     * @method getHeight()
     * @for kity.Rect,
     * @grammar getHeight() => number
     * @description 获取矩形高度
     */
    public getHeight(): number;

    /**
     * @method getPositionX()
     * @for kity.Rect,
     * @grammar getPositionX() => number
     * @description 获取矩形X轴位置
     */
    public getPositionX(): number;

    /**
     * @method getPositionY()
     * @for kity.Rect,
     * @grammar getPositionY() => number
     * @description 获取矩形Y轴位置
     */
    public getPositionY(): number;

    /**
     * @method setPositionX()
     * @for kity.Rect,
     * @grammar setPositionX(x) => kity.Rect
     * @description 设置矩形X轴位置
     * @param {number} x
     */
    public setPositionX(x: number): Rect;

    /**
     * @method setPositionY()
     * @for kity.Rect,
     * @grammar setPositionY(y) => kity.Rect
     * @description 设置矩形Y轴位置
     * @param {number} y
     */
    public setPositionY(y: number): Rect;
  }
}
