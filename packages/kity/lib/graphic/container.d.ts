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
   * @class Container
   * @description 表示容器
   */
  class Container {
    /**
     * @method getItems()
     * @description 获取items列表
     */
    public getItems<T = any>(): T[];

    /**
     * @method getItem()
     * @description 获取Item
     * @param { number } index
     */
    public getItem<T = any>(index: number): T;

    /**
     * @method getFirstItem()
     * @description 获取第一个item
     */
    public getFirstItem<T = any>(): T;

    /**
     * @method getLastItem()
     * @description 获取最后一个item
     */
    public getLastItem<T = any>(): T;

    /**
     * @method indexOf()
     * @description 获取指定项索引
     * @param {any} item
     */
    public indexOf<T = any>(item: T): number;

    /**
     * @method eachItem()
     * @description 遍历处理储存的每一项
     * @param { function } fn
     */
    public eachItem<T = any>(fn: (index: number, item: T) => void): Container;

    /**
     * @method addItem()
     * @description 增加一项
     * @param {any} item
     * @param {number} pos
     */
    public addItem<T = any>(item: T, pos: number): Container;

    /**
     * @method addItems()
     * @description 增加项列表
     * @param {any[]} items
     */
    public addItems<T = any>(items: T[]): Container;

    /**
     * @method setItems()
     * @description 设置新的项列表
     * @param {any[]} items
     */
    public setItems<T = any>(items: T[]): Container;

    /**
     * @method appendItem()
     * @description 向后追加一项
     * @param {any} item
     */
    public appendItem<T = any>(item: T): Container;

    /**
     * @method prependItem()
     * @description 从前添加一项
     * @param {any} item
     */
    public prependItem<T = any>(item: T): Container;

    /**
     * @method removeItem()
     * @description 移除item，如果pos是数字则为索引下表，如果是object，内部先获取该索引，在进行移除
     * @param {number | any} pos
     */
    public removeItem<T = any>(pos: number | T): Container;

    /**
     * @method clear()
     * @description 清空
     */
    public clear(): Container;
  }
}
