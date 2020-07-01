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
  class ShapeContainer extends Container {
    /**
     * @property isShapeContainer
     * @type {boolean}
     * @description 是否是图形容器
     */
    public isShapeContainer: boolean;

    /**
     * @method addShape()
     * @description 添加shape图形到容器指定位置
     * @param {Shape} shape
     * @param {number} index
     */
    public addShape(shape: Shape, index: number): ShapeContainer;

    /**
     * @method put()
     * @description  添加shape到容器
     * @param {Shape} shape
     */
    public put(shape: Shape): Shape;

    /**
     * @method appendShape()
     * @description 向后追加shap
     * @param {Shape} shape
     */
    public appendShape(shape: Shape): ShapeContainer;

    /**
     * @method prependShape()
     * @description 从前添加一个shape至容器
     * @param {Shape} shape
     */
    public prependShape(shape: Shape): ShapeContainer;

    /**
     * @method replaceShape()
     * @description 用新的Shape替换源Shape
     * @param {Shape} replacer
     * @param {Shape} origin
     */
    public replaceShape(replacer: Shape, origin: Shape): ShapeContainer;

    /**
     * @method addShapeBefore()
     * @description 在指定的shape前面添加另一个shape
     * @param {Shape} shape
     * @param {Shape} refer
     */
    public addShapeBefore(shape: Shape, refer: Shape): ShapeContainer;

    /**
     * @method addShapeAfter()
     * @description 在指定的shape后面添加另一个shape
     * @param {Shape} shape
     * @param {Shape} refer
     */
    public addShapeAfter(shape: Shape, refer: Shape): ShapeContainer;

    /**
     * @method addShapes()
     * @description 添加多个shape到容器
     * @param {Shape[]} shapes
     */
    public addShapes(shapes: Shape[]): ShapeContainer;

    /**
     * @method removeShape()
     * @description 根据索引从容器中移除指定shape
     * @param { number } index
     */
    public removeShape(index: number): ShapeContainer;

    /**
     * @method getShapes()
     * @description 获取shape列表
     */
    public getShapes(): Shape[];

    /**
     * @method getShapesByType()
     * @description 根据类型名称获取shape列表
     * @param {string} name
     */
    public getShapesByType(name: string): Shape[];

    /**
     * @method getShapeById()
     * @description 根据id获取节点元素上的shape
     * @param {string} id
     */
    public getShapeById(id: string): Shape;

    /**
     * @method arrangeShape()
     * @description 根据索引安排指定shape位置
     * @param {Shape} shape
     * @param {number} index
     */
    public arrangeShape(shape: Shape, index: number): ShapeContainer;

    /**
     * @method getShapeNode()
     * @description 获取Shape node 节点元素
     */
    protected getShapeNode(): Element;
  }
}
