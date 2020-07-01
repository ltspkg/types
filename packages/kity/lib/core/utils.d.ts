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
  namespace Utils {
    /**
     * @method each()
     * @for kity.Utils
     * @grammar each(obj, interator, context)
     * @param  { object| any[]} obj 要迭代的对象或数组
     * @param  { function } iterator 迭代函数
     * @param  { object } context  迭代函数的上下文
     *
     * @example 迭代数组
     *
     * ```js
     * kity.Utils.each([1, 2, 3, 4, 5], function(value, index, array) {
     *     console.log(value, index);
     * });
     * // 1, 0
     * // 2, 1
     * // 3, 2
     * // 4, 3
     * // 5, 4
     * ```
     *
     * @example 迭代对象
     *
     * ```js
     * var obj = {
     *     name: 'kity',
     *     version: '1.2.1'
     * };
     * var param = [];
     * kity.Utils.each(obj, function(value, key, obj) {
     *     param.push(key + '=' + value);
     * });
     * console.log(param.join('&')); // "name=kity&version=1.2.1"
     * ```
     */
    function each<T = object>(
      obj: T,
      iterator: (value: any, key?: string, obj?: T) => void,
      context: object
    ): void;
    function each<U = any, T = U[]>(
      obj: T,
      iterator: (value: U, key?: number, obj?: T) => void,
      context: object
    ): void;

    /**
     * @method extend()
     * @for kity.Utils
     * @grammar extend(target, sources..., notCover) => {object}
     * @description 把源对象的属性合并到目标对象上
     * @param { object } target 目标对象
     * @param { object } sources 源对象
     * @param { boolean } notCover 是否不要覆盖源对象已有的属性
     *
     * @example
     *
     * ```js
     * var a = {
     *     key1: 'a1',
     *     key2: 'a2'
     * };
     *
     * var b = {
     *     key2: 'b2',
     *     key3: 'b3'
     * };
     *
     * var c = {
     *     key4: 'c4'
     * };
     *
     * var d = kity.extend(a, b, c);
     *
     * console.log(d === a); // true
     * console.log(a); // {key1: 'a1', key2: 'b2', key3: 'b3', key4: 'c4'}
     * ```
     */
    function extend<T = object>(target: T, ...sources: object[] | boolean[]): T;

    /**
     * @method deepExtend()
     * @for kity.Utils
     * @grammar deepExtend(target, sources..., notCover)
     * @description 把源对象的属性合并到目标对象上，如果属性是对象，会递归合并
     * @param { object } target 目标对象
     * @param { object } sources 源对象
     * @param { boolean } notCover 是否不要覆盖源对象已有的属性
     */
    function deepExtend<T = object, U = object>(
      target: T,
      sources: U,
      notCover?: boolean
    ): T & U;

    /**
     * @method clone()
     * @for kity.Utils
     * @grammar clone(obj) => {object}
     * @description 返回一个对象的克隆副本（非深度复制）
     * @param  { object } obj 要克隆的对象
     *
     * @example
     *
     * ```js
     * var source = {
     *     key1: {
     *         key2: 'value2'
     *     },
     *     key3: 'value3'
     * };
     *
     * var target = kity.Utils.clone(source);
     *
     * console.log(target === source); // false
     * console.log(target.key1 === source.key1); // true
     * console.log(target.key3 === source.key3); // true
     * ```
     */
    function clone<T = object>(obj: T): T;

    /**
     * @method copy()
     * @for kity.Utils
     * @grammar copy(obj) => {object}
     * @description 返回一个对象的拷贝副本（深度复制）
     * @param  {object} obj 要拷贝的对象
     *
     * @example
     *
     * ```js
     * var source = {
     *     key1: {
     *         key2: 'value2'
     *     },
     *     key3: 'value3'
     * };
     *
     * var target = kity.Utils.copy(source);
     *
     * console.log(target === source); // false
     * console.log(target.key1 === source.key1); // false
     * console.log(target.key3 === source.key3); // true，因为是值类型
     * ```
     */
    function copy<T = object>(obj: T): T;

    /**
     * @method queryPath()
     * @for kity.Utils
     * @grammar queryPath(path, obj) => {any}
     * @description 返回一个对象key路径的值
     * @param  {string} path obj的key路径
     * @param  {object} obj 要拷贝的对象
     *
     * @example
     *
     * ```js
     * var obj = {
     *     key1: {
     *         key2: 'value2'
     *     }
     * };
     * var path = "key1.key2"
     * var result = kity.Utils.queryPath(path, obj);
     *
     * console.log(result); // value2
     * ```
     */
    function queryPath<T = object, U = any>(path: string, obj: T): U;

    /**
     * @method getValue()
     * @for kity.Utils
     * @grammar getValue(value, defaultValue) => {any}
     * @description 如果值不为undefined返回值自身；否则返回后备（defaultValue）值
     * @param { any } value
     * @param { any } defaultValue
     */
    function getValue<T = any>(value: T, defaultValue: T): T;

    /**
     * @method flatten()
     * @for kity.Utils
     * @grammar flatten(arr) => {Array}
     * @description 返回给定数组的扁平化版本
     * @param  { any[] } arr 要扁平化的数组
     *
     * @example
     *
     * ```js
     * var flattened = kity.Utils.flatten([[1, 2], [2, 3], [[4, 5], [6, 7]]]);
     * console.log(flattened); // [1, 2, 3, 4, 5, 6, 7];
     * ```
     */
    function flatten<T = any[], U = T[]>(arr: U): T;

    /**
     * @method paralle()
     * @for kity.Utils
     * @grammar paralle() => {Any}
     *
     * @description 平行地对 v1 和 v2 进行指定的操作
     *
     *    如果 v1 是数字，那么直接进行 op 操作
     *    如果 v1 是对象，那么返回一个对象，其元素是 v1 和 v2 同键值的每个元素平行地进行 op 操作的结果
     *    如果 v1 是数组，那么返回一个数组，其元素是 v1 和 v2 同索引的每个元素平行地进行 op 操作的结果
     *
     * @param  { number | object | any[]} v1 第一个操作数
     * @param  { number| object | any[]} v2 第二个操作数
     * @param  { function } op 操作函数
     *
     *
     *
     * @example
     *
     * ```js
     * var a = {
     *     value1: 1,
     *     value2: 2,
     *     value3: [3, 4, 5]
     * };
     *
     * var b = {
     *     value1: 2,
     *     value2: 3,
     *     value3: [4, 5, 6]
     * };
     *
     * var c = kity.Utils.paralle(a, b, function(v1, v2) {
     *     return v1 + v2;
     * });
     *
     * console.log(c.value1); // 3
     * console.log(c.value2); // 5
     * console.log(c.value3); // [7, 9, 11]
     *
     * ```
     */
    function paralle<T = number | object | any[]>(
      v1: T,
      v2: T,
      op: (v1: T, v2: T) => T
    ): T;

    type parallelizeCallback<T = number | object | any[]> = (v1: T, v2: T) => T;
    type parallelizeFactory<T = number | object | any[]> = parallelizeCallback<
      T
    >;
    /**
     * @method parallelize()
     * @for kity.Utils
     * @grammar parallelize(opCallbck) => {opFactoryCallback}
     *
     * @description 创建 op 操作的一个平行化版本
     *
     * @param  { function } op 操作函数
     *
     *
     *
     * @example
     *
     * ```js
     * var a = {
     *     value1: 1,
     *     value2: 2,
     *     value3: [3, 4, 5]
     * };
     *
     * var b = {
     *     value1: 2,
     *     value2: 3,
     *     value3: [4, 5, 6]
     * };
     *
     * var op = function(v1, v2) {
     *     return v1 + v2;
     * }
     *
     * var opFactory = kity.Utils.parallelize(op);
     * var c = opFactory(a, b);
     *
     * console.log(c.value1); // 3
     * console.log(c.value2); // 5
     * console.log(c.value3); // [7, 9, 11]
     *
     * ```
     */
    function parallelize<T = number | object | any[]>(
      op: parallelizeCallback<T>
    ): parallelizeFactory<T>;

    /**
     * @method isString()
     * @for kity.Utils
     * @grammar isString(unknown) => {boolean}
     * @description 判断一个值是否为字符串类型
     * @param  {any} unknown 要判断的值
     */
    function isString(unknown: any): boolean;

    /**
     * @method isFunction()
     * @for kity.Utils
     * @grammar isFunction(unknown) => {boolean}
     * @description 判断一个值是否为函数类型
     * @param  {any} unknown 要判断的值
     */
    function isFunction(unknown: any): boolean;

    /**
     * @method isArray()
     * @for kity.Utils
     * @grammar isArray(unknown) => {boolean}
     * @description 判断一个值是否为数组类型
     * @param  {any} unknown 要判断的值
     */
    function isArray(unknown: any): boolean;

    /**
     * @method isNumber()
     * @for kity.Utils
     * @grammar isNumber(unknown) => {boolean}
     * @description 判断一个值是否为数字类型
     * @param  {any} unknown 要判断的值
     */
    function isNumber(unknown: any): boolean;

    /**
     * @method isRegExp()
     * @for kity.Utils
     * @grammar isRegExp(unknown) => {boolean}
     * @description 判断一个值是否为正则表达式类型
     * @param  {any} unknown 要判断的值
     */
    function isRegExp(unknown: any): boolean;

    /**
     * @method isObject()
     * @for kity.Utils
     * @grammar isObject(unknown) => {boolean}
     * @description 判断一个值是否为对象类型
     * @param  {any} unknown 要判断的值
     */
    function isObject(unknown: any): boolean;

    /**
     * @method isBoolean()
     * @for kity.Utils
     * @grammar isBoolean(unknown) => {boolean}
     * @description 判断一个值是否为布尔类型
     * @param  {any} unknown 要判断的值
     */
    function isBoolean(unknown: any): boolean;
  }
}
