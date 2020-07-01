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


  interface Paper extends ShapeContainer, EventHandler, Styled, ViewBox {}

  interface Axis {
    x: number;

    y: number;
  }

  interface ViewPort {
    zoom: number;

    center: Axis;

    offset: Axis;
  }

  /**
   * @class Paper
   * @description 画纸类
   */
  class Paper {
    /**
     * @constructor
     * @for Paper
     *
     * @param  {Element | string} container  容器元素或者id字符串
     */
    public constructor(container: Element | string);

    /**
     * @method renderTo()
     * @description 将画纸内容渲染到指定容器
     * @param {Element | string} container
     */
    public renderTo(container: Element | string): void;

    /**
     * @method createSVGNode()
     * @description 创建SVG节点元素
     */
    public createSVGNode(): SVGElement;

    /**
     * @method getNode()
     * @description 获取画纸节点元素
     */
    public getNode(): Element;

    /**
     * @method getContainer()
     * @description 获取画纸渲染的容器元素节点
     */
    public getContainer(): Container;

    /**
     * @method getWidth()
     * @description 获取画纸元素节点宽度
     */
    public getWidth(): number;

    /**
     * @method setWidth()
     * @description 设置画纸元素节点宽度
     * @param {string} width
     */
    public setWidth(width: string): Paper;

    /**
     * @method getHeight()
     * @description 获取画纸元素节点高度
     */
    public getHeight(): number;

    /**
     * @method setHeight()
     * @description 设置画纸元素节点宽度
     * @param {string} height
     */
    public setHeight(height: string): Paper;

    /**
     * @method setViewPort()
     * @description 设置画纸视窗大小
     * @param {number} cx
     * @param {number} cy
     * @param {number} zoom
     */
    public setViewPort(cx: number, cy: number, zoom: number): Paper;

    /**
     * @method getViewPort()
     * @description 获取画纸视窗大小
     */
    public getViewPort(): ViewPort;

    /**
     * @method getViewPortMatrix()
     * @description 获取画纸视窗大小矩阵
     */
    public getViewPortMatrix(): Matrix;

    /**
     * @method getViewPortTransform()
     * @description 获取画纸视窗图形节点转换矩阵
     */
    public getViewPortTransform(): Matrix;

    /**
     * @method getTransform()
     * @description 获取画纸视窗图形节点矩阵
     */
    public getTransform(): Matrix;

    /**
     * @method addResource()
     * @description 添加资源（或元素）
     * @param {any} resource
     */
    public addResource<T = any>(resource: T): Paper;

    /**
     * @method removeResource()
     * @description 移除资源（或元素）
     * @param { any } resource
     */
    public removeResource<T = any>(resource: T): Paper;

    /**
     * @method getPaper()
     * @description 获取当前画纸
     */
    public getPaper(): Paper;
  }
}
