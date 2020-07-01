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
   * @class kity.Point
   * @description 表示一个点
   */
  class Point {
    /**
     * @constructor
     * @for kity.Point
     * @description 指定默认的 x 和 y 创建一个点
     *
     * @param  {number} x 点的 x 坐标
     * @param  {number} y 点的 y 坐标
     */
    public constructor(x: number, y: number);

    /**
     * @method offset
     * @for kity.Point
     * @description 获取距离该点指定位置坐标
     * @param {number} dx x坐标偏移距离
     * @param {number} dy y坐标偏移距离
     */
    public offset(dx: number, dy: number): Point;

    /**
     * @method valueOf
     * @for kity.Point
     * @description 获取当前位置坐标（x,y）
     */
    public valueOf(): [number, number];

    /**
     * @method toString
     * @for kity.Point
     * @description 获取当前坐标字符串化
     */
    public toString(): string;

    /**
     * @class kity.Point
     * @description 返回一个在x轴和y轴方向各自步进0.5个位移点
     */
    public spotf(): Point;

    /**
     * @method round
     * @for kity.Point
     * @description 拷贝当前点
     */
    public round(): Point;

    /**
     * @method isOrigin
     * @for kity.Point
     * @description 是否是原点
     */
    public isOrigin(): boolean;

    /**
     * @static
     * @method fromPolar()
     * @for kity.Point
     * @grammar kity.Point.fromPolar(radius, angle, unit) => kity.Point
     * @param  {number} radius 极坐标中的半径
     * @param  {number} angle  极坐标中的角度
     * @param  {string} unit   角度使用的单位，默认为 'deg' (角度)，可以取值为 'rad'，表示传入的是弧度值
     */
    public static fromPolar(radius: number, angle: number, unit: string): Point;

    /**
     * @static
     * @method parse()
     * @description 解析参数并返回一个新点
     * @param {any} unknown
     */
    public static parse(unknown: any): Point;
  }
}
