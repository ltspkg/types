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
  interface NodeTextObjectData {
    /// 节点id
    id: string;

    /// 创建时间，时间戳
    created: number;
  }

  /**
   * @class MinderNode
   *
   * 表示一个脑图节点
   */
  class Node {
    /**
     * @constructor
     * @for kityminder.Node
     *
     * @param { string ｜ NodeTextObjectData } textData 配置对象
     *
     */
    public constructor(textData: string | NodeTextObjectData);

    /**
     * @method isRoot()
     * @for kityminder.Node
     *
     * @description 判断节点是否根节点
     *
     */
    public isRoot(): boolean;

    /**
     * @method isLeaf()
     * @for kityminder.Node
     *
     * @description 判断节点是否叶子
     */
    public isLeaf(): boolean;

    /**
     * @method getRoot()
     * @for kityminder.Node
     *
     * @description 获取节点的根节点
     */
    public getRoot(): Node;

    /**
     * @method getParent()
     * @for kityminder.Node
     *
     * @description 获得节点的父节点
     */
    public getParent(): Node;

    /**
     * @method getSiblings()
     * @for kityminder.Node
     *
     * @description 获得节点的兄弟节点
     */
    public getSiblings(): Node[];

    /**
     * @method getLevel()
     * @for kityminder.Node
     *
     * @description 获得节点的深度
     */
    public getLevel(): number;

    /**
     * @method getComplex()
     * @for kityminder.Node
     *
     * @description 获得节点的复杂度（即子树中节点的数量）
     */
    public getComplex(): number;

    /**
     * @method getType()
     * @for kityminder.Node
     *
     * @description 获得节点的类型（root|main|sub）
     */
    public getType(): "root" | "main" | "sub";

    /**
     * @method isAncestorOf()
     * @for kityminder.Node
     *
     * @description 判断当前节点是否被测试节点的祖先
     * @param { Node } test
     */
    public isAncestorOf(test: Node): boolean;

    /**
     * @method getData()
     * @for kityminder.Node
     *
     * @description 获取当前节点数据，如果传递key则返回指定的值；否则返回整个数据
     * @param { string } key 键名，可选
     */
    public getData<U = any>(key?: string): U;

    /**
     * @method setData()
     * @for kityminder.Node
     * @description 设置当前节点数据，如果key为字符串，则键名的值为第二个参数value；如果key为对象，则以此遍历对象中的键值对
     * @param { string ｜ object } key 键名; 字符串或者对象（最为值）
     * @param { any } value 键值；如果键名为字符串
     */
    public setData<K = object, U = any>(key: string | K, value?: U): Node;

    /**
     * @method setText()
     * @for kityminder.Node
     *
     * @description 设置节点的文本数据
     * @param { string } text 文本数据
     */
    public setText(text: string): string;

    /**
     * @method getText()
     * @for kityminder.Node
     *
     * @description 获取节点的文本数据
     */
    public getText(): string | null;

    /**
     * @method preTraverse()
     * @for kityminder.Node
     *
     * @description 先序遍历当前节点树
     * @param { Function } fn 遍历函数
     * @param { boolean } excludeThis 是否不包括当前node上下文
     */
    public preTraverse(
      fn: (context: Node) => void,
      excludeThis?: boolean
    ): void;

    /**
     * @method postTraverse()
     * @for kityminder.Node
     *
     * @description 后序遍历当前节点树
     * @param { Function } fn 遍历函数
     * @param { boolean } excludeThis 是否不包括当前node上下文
     */
    public postTraverse(
      fn: (context: Node) => void,
      excludeThis?: boolean
    ): void;

    /**
     * @method traverse()
     * @for kityminder.Node
     *
     * @description 遍历当前节点树(后序遍历)
     * @param { Function } fn 遍历函数
     * @param { boolean } excludeThis 是否不包括当前node上下文
     */
    public traverse(fn: (context: Node) => void, excludeThis: boolean): void;

    /**
     * @method getChildren()
     * @for kityminder.Node
     *
     * @description 获取当前所有子节点数组
     */
    public getChildren(): Node[];

    /**
     * @method getIndex()
     * @for kityminder.Node
     *
     * @description 获取当前节点在父节点的所有子节点队列中的索引
     */
    public getIndex(): number;

    /**
     * @method insertChild()
     * @for kityminder.Node
     *
     * @description 想当前节点的父节点的指定索引位置插入一个新节点
     * @param { Node } node 新节点
     * @param { number } index 新节点索引
     */
    public insertChild(node: Node, index: number): void;

    /**
     * @method appendChild()
     * @for kityminder.Node
     *
     * @description 向后追加新节点
     * @param { Node } node 新节点
     */
    public appendChild(node: Node): void;

    /**
     * @method prependChild()
     * @for kityminder.Node
     *
     * @description 向前追加新节点
     * @param { Node } node 新节点
     */
    public prependChild(node: Node): void;

    /**
     * @method removeChild()
     * @for kityminder.Node
     *
     * @description 移除指定子节点
     * @param { Node ｜ number } node 子节点实例或者索引
     */
    public removeChild(node: number | Node): void;

    /**
     * @method clearChildren()
     * @for kityminder.Node
     *
     * @description 清空当前节点自元素
     */
    public clearChildren(): void;

    /**
     * @method getChild()
     * @for kityminder.Node
     *
     * @description 获取指定索引下的子节点
     * @param { number } index
     */
    public getChild(index: number): Node;

    /**
     * @method getCommonAncestor()
     * @for kityminder.Node
     *
     * @description 获取与另一个节点的共同祖先节点
     */
    public getCommonAncestor(node: Node): Node;

    /**
     * @method getRenderContainer()
     * @for kityminder.Node
     *
     * @description 获取当前节点渲染容器
     */
    public getRenderContainer(): kity.Group;

     /**
     * @method contains()
     * @for kityminder.Node
     *
     * @description 判断当前节点是否被测试节点的祖先或者是否是当前节点
     * @param { Node } node
     */
    public contains(node: Node): boolean;

    /**
     * @method clone()
     * @for kityminder.Node
     *
     * @description 克隆当前节点的一个副本
     */
    public clone(): Node;

    /**
     * @method compareTo()
     * @for kityminder.Node
     *
     * @description 比较节点是否相等（值比较）
     * @param { Node } node 另一个节点
     */
    public compareTo(node: Node): boolean;

    /**
     * @method traverse()
     * @for kityminder.Node
     *
     * @description 获取脑图实例
     */
    public getMinder(): Minder;

    /**
     * @method getCommonAncestor()
     * @static
     * @for kityminder.Node
     *
     * @description 返回两个节点的共同祖先节点
     */
    public static getCommonAncestor(nodeA: Node, nodeB: Node): Node;
  }
}
