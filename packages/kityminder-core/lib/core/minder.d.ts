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

declare namespace kityminder {
  /**
   * @class kityminder.Minder
   * @description 脑图类
   */

  class Minder<T = any> {
    /**
     * @property version
     * @for kityminder.Minder
     * @type {string}
     * @readOnly
     * @description 版本号
     */
    public version: string;

    /**
     * @constructor
     * @for kityminder.Minder
     *
     * @grammar new kityminder.Minder(option)
     * @param { any } option 配置对象
     *
     */
    public constructor(option: T);

    /**
     * @method registerInitHook()
     * @for kityminder.Minder
     *
     * @grammar minder.registerInitHook((option) => { ... })
     * @description 在创建脑图之前注册钩子函数
     * @param { Function } hook 钩子函数
     *
     */
    public registerInitHook<U = T>(hook: (option: U) => void): void;

    /**
     * @method getRoot()
     * @for kityminder.Minder
     *
     * @description 获取根节点
     */
    public getRoot(): Node;

    /**
     * @method setRoot()
     * @for kityminder.Minder
     *
     * @description 设置根节点
     */
    public setRoot(root: Node): void;

    /**
     * @method getAllNode()
     * @for kityminder.Minder
     *
     * @description 后续遍历获取所有子节点
     */
    public getAllNode(): Node[];

    /**
     * @method getNodeById()
     * @for kityminder.Minder
     *
     * @description 通过指定id获取节点
     * @param { string } id
     */
    public getNodeById(id: string): Node;

    /**
     * @method getNodesById()
     * @for kityminder.Minder
     *
     * @description 通过id数组获取节点数组
     * @param { string[] } ids
     */
    public getNodesById(ids: string[]): Node[];

    /**
     * @method appendNode()
     * @for kityminder.Minder
     *
     * @description 向指定父元素索引位置添加指定节点
     * @param { Node } node
     * @param { Node } parent
     * @param { number } index
     */
    public appendNode(node: Node, parent: Node, index: number): Minder;

    /**
     * @method removeNode()
     * @for kityminder.Minder
     *
     * @description 移除指定节点
     * @param { Node } node
     */
    public removeNode(node: Node): void;

    /**
     * @method attachNode()
     * @for kityminder.Minder
     *
     * @description 挂载指定节点
     * @param { Node } node
     */
    public attachNode(node: Node): void;

    /**
     * @method detachNode()
     * @for kityminder.Minder
     *
     * @description 卸载指定节点
     * @param { Node } node
     */
    public detachNode(node: Node): void;

    /**
     * @method registerInitHook()
     * @for kityminder.Minder
     *
     * @description 获取脑图标题
     *
     */
    public getMinderTitle(): string;
  }
}
