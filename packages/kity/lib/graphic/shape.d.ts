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
  interface Shape extends EventHandler, Styled, Data {}

  /**
   * @class Shape
   * @description 表示一个形状
   */
  export class Shape {
    /**
     * @property node
     * @for Shape
     * @type {Element}
     * @readOnly
     * @description Shape 的元素节点
     */
    protected node: Element;

    /**
     * @constructor
     * @for Shape
     *
     * @param  {string} tagName 标记名称
     */
    public constructor(tagName: string);

    /**
     * @method getId()
     * @for Shape
     * @description 获得shape的id
     */
    public getId(): string;

    /**
     * @method setId()
     * @for Shape
     * @description 获得shape的id
     * @param { string } id
     */
    public setId(id: string): Shape;

    /**
     * @method getNode()
     * @for Shape
     * @description 获取shape节点元素
     */
    public getNode(): Element;

    /**
     * @method getBoundaryBox()
     * @for Shape
     * @description 获取shape边界盒子
     */
    public getBoundaryBox(): Box;

    /**
     * @method getRenderBox()
     * @for Shape
     * @description 获取shape渲染盒子
     */
    public getRenderBox(refer?: CTMRefer): Box;

    /**
     * @method getWidth()
     * @for Shape
     * @description 获取shape渲染盒子的宽度
     */
    public getWidth(): number;

    /**
     * @method getHeight()
     * @for Shape
     * @description 获取shape渲染盒子的高度
     */
    public getHeight(): number;

    /**
     * @method getSize()
     * @for Shape
     * @description 获取shape尺寸，没有x和y坐标的Box
     */
    public getSize(): Box;

    /**
     * @method setOpacity()
     * @for Shape
     * @description 设置盒子透明度
     * @param {number} value
     */
    public setOpacity(value: number): Shape;

    /**
     * @method getOpacity()
     * @for Shape
     * @description 获取盒子透明度
     */
    public getOpacity(): number;

    /**
     * @method setVisible()
     * @description 设置盒子是否可见
     * @param {boolean} visible
     */
    public setVisible(visible: boolean): Shape;

    /**
     * @method getVisible()
     * @description 获取盒子可见属性（display）
     */
    public getVisible(): string;

    /**
     * @method hasAncestor()
     * @description 判断当前Shape元素节点是否有祖先元素
     */
    public hasAncestor(): boolean;

    /**
     * @method getTransform()
     * @for Shape
     * @description 获取shape转换矩阵
     * @param { CTMRefer } refer
     */
    public getTransform(refer?: CTMRefer): Matrix;

    /**
     * @method clearTransform()
     * @description 清除转换
     */
    public clearTransform(): Shape;

    /**
     * @method setMatrix()
     * @description 设置矩阵
     * @param { number[] } matrix
     */
    public setMatrix(...matrix: number[]): Shape;

    /**
     * @method setTranslate()
     * @description 设置x,y,z轴的translate值
     * @param { number[] } translate
     */
    public setTranslate(...translate: number[]): Shape;

    /**
     * @method setRotate()
     * @description 设置旋转角度
     * @param {string[]} rotate
     */
    public setRotate(...rotate: string[]): Shape;

    /**
     * @method setScale()
     * @description 设置x,y,z轴的缩放
     * @param {number[]} scale
     */
    setScale(...scale: number[]): Shape;

    /**
     * @method translate()
     * @description 沿着x,y轴2D 位移
     * @param {number} dx
     * @param {number} dy
     */
    public translate(dx: number, dy: number): Shape;

    /**
     * @method rotate()
     * @description 沿着2d旋转角度
     * @param {number} deg
     */
    public rotate(deg: number): Shape;

    /**
     * @method scale()
     * @description 沿着x,y轴缩放
     * @param {number} sx
     * @param {number} sy
     */
    public scale(sx: number, sy: number): Shape;

    /**
     * @method skew()
     * @description 沿着x,y轴的2D转换
     * @param {number} sx
     * @param {number} sy
     */
    public skew(sx: number, sy: number): Shape;

    /**
     * @method stroke()
     * @description 用pen stroke shape
     * @param {Pen} pen
     * @param {number} width
     */
    public stroke(pen: Pen, width: number): Shape;

    /**
     * @method fill()
     * @for Shape
     * @description 填充颜色
     * @param {Color} brush
     */
    public fill(brush: Color): Shape;

    /**
     * @method setAttr
     * @for Shape
     * @description 设置节点元素attr 属性
     * @param { string } attr
     * @param { any } value
     */
    public setAttr(attr: string, value: any): Shape;

    /**
     * @method getAttr()
     * @for Shape
     * @description 获取节点指定属性
     * @param {string} attr
     */
    public getAttr(attr: string): any;
  }
}
