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
  interface MinderOption {
    renderTo: string | HTMLElement;
    [key: string]: any;
  }

  interface MinderData {
    data: object;

    children: MinderData[];
  }

  /**
   * @class kityminder.Minder
   * @description 脑图类
   */
  class Minder<T = MinderOption> {
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
    public constructor(option?: T);

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
     * @method getMinderTitle()
     * @for kityminder.Minder
     *
     * @description 获取脑图标题
     */
    public getMinderTitle(): string;

    /**
     * @method setUp()
     * @for kityminder.Minder
     * @description 自动导入
     *
     * @param { string | HTMLElement } target
     */
    public setUp(target: string | HTMLElement): Minder;

    /**
     * @method exportJson()
     * @for kityminder.Minder
     * @description
     *     导出当前脑图数据为 JSON 对象，导出的数据格式请参考 [Data](data) 章节。
     * @grammar exportJson() => {plain}
     */
    public exportJson(): object;

    /**
     * @method Text2Children()
     * @param {Node} node 要导入数据的节点
     * @param {string} text 导入的text数据
     * @example: 用于批量导入如下类型的节点
     *      234
     *      3456346 asadf
     *          12312414
     *              wereww
     *          12314
     *      1231412
     *      13123
     */
    public Text2Children(node: Node, text: string): void;

    /**
     * @method exportNode()
     * @param  { Node } node 当前要被导出的节点
     * @return { object }  返回只含有data和children的Object
     */
    public exportNode(node: Node): MinderData;

    /**
     * @method importNode()
     * @description 根据纯json {data, children}数据转换成为脑图节点
     * @param { Node } node
     * @param { object } json
     */
    public importNode(node: Node, json: object): Node;

    /**
     * @method importJson()
     * @for kityminder.Minder
     * @description 导入脑图数据，数据为 JSON 对象，具体的数据字段形式请参考 [Data](data) 章节。
     *
     * @grammar importJson(json) => {this}
     *
     * @param { object } json 要导入的数据
     */
    public importJson(json: object): Minder;

    /**
     * @method importData()
     * @for Minder
     * @description 使用指定的数据协议，导入脑图数据，覆盖当前实例的脑图
     *
     * @grammar importData(protocol, callback) => Promise<json>
     *
     * @param {string} protocol 指定的用于解析数据的数据协议（默认内置三种数据协议 `json`、`text` 和 `markdown` 的支持）
     * @param {any} data 要导入的数据
     * @param {object} option
     */
    public importData(
      protocolName: string,
      data: any,
      option?: object
    ): Promise<object>;

    /**
     * @method decodeData()
     * @for Minder
     * @description 使用指定的数据协议，解析为脑图数据，与 importData 的区别在于：不覆盖当前实例的脑图
     *
     * @grammar decodeData(protocol, callback) => Promise<json>
     *
     * @param {string} protocol 指定的用于解析数据的数据协议（默认内置三种数据协议 `json`、`text` 和 `markdown` 的支持）
     * @param {any} data 要导入的数据
     * @param {object} option
     */
    public decodeData(
      protocolName: string,
      data: any,
      option?: object
    ): Promise<object>;

    /**
     * @method queryCommandState()
     * @for Minder
     * @description 查询指定命令的状态
     *
     * @grammar queryCommandName(name) => {number}
     *
     * @param {string} name 要查询的命令名称
     *
     * @return {number}
     *   -1: 命令不存在或命令当前不可用
     *    0: 命令可用
     *    1: 命令当前可用并且已经执行过
     */
    public queryCommandState(name: string): CommandState;

    /**
     * @method queryCommandValue()
     * @for Minder
     * @description 查询指定命令当前的执行值
     *
     * @grammar queryCommandValue(name) => {any}
     *
     * @param {string} name 要查询的命令名称
     *
     * @return {any}
     *    如果命令不存在，返回 undefined
     *    不同命令具有不同返回值，具体请查看 [Command](command) 章节
     */
    public queryCommandValue(name: string): any;

    /**
     * @method execCommand()
     * @for Minder
     * @description 执行指定的命令。
     *
     * @grammar execCommand(name, args...)
     *
     * @param {string} name 要执行的命令名称
     * @param {any[]} args 要传递给命令的其它参数
     */
    public execCommand(name: string, ...args: any[]): any;

    /**
     * @method useTheme()
     * @description 切换脑图实例上的主题
     * @param  {string} name 要使用的主题的名称
     */
    public useTheme(name: string): boolean;

    /**
     * @method setTheme()
     * @description 设置主题
     * @param { string } name 主题名称
     */
    public setTheme(name: string): Minder;

    /**
     * @method getTheme()
     * @description 获取脑图实例上的当前主题
     * @return {string|object} [description]
     */
    public getTheme(): string | object;

    /**
     * @method getThemeItems()
     * @description 获取脑图实例主题配置项或名称
     */
    public getThemeItems(): object;

    /**
     * @method getStyle()
     * @description 获取指定节点的样式
     * @param {string} name 样式名称，可以不加节点类型的前缀
     * @param {Node} node 节点
     */
    public getStyle(name: string, node: Node): string | number;

    /**
     * @method getNodeStyle()
     * @description 获取指定节点的样式
     * @param {Node} node 节点
     * @param {string} name 样式名称，可以不加节点类型的前缀
     */
    public getNodeStyle(node: Node, name: string): string | number;

    /**
     * @method destroy()
     * @description 销毁时清空垃、模块销毁，重置事件
     */
    public destroy(): void;

    /**
     * @method reset()
     * @description 重置清空垃圾、模块销毁
     */
    public reset(): void;

    /**
     * @description 添加事件监听
     * @param {string} name 事件名称
     * @param {Function} callback 事件处理函数
     */
    public on(name: string, callback: (...args: any[]) => void): Minder;

    /**
     * @description 移除事件监听
     * @param {string} name 事件名称
     * @param {Function} callback 事件处理函数
     */
    public off(name: string, callback: (...args: any[]) => void): void;

    /**
     * @description 触发事件
     * @param {string} type 事件类型名称
     * @param {any} params 事件参数
     */
    public fire(type: string, params: any): Minder;

    /**
     * @method dispatchKeyEvent
     * @description 派发键盘（相关）事件到脑图实例上，让实例的模块处理
     * @grammar dispatchKeyEvent(e) => {this}
     * @param  {Event} e 原生的 Dom 事件对象
     */
    public dispatchKeyEvent(evt: Event): void;
  }
}
