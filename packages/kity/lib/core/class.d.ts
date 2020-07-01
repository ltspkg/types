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
  class Class {
    protected __KityClassName: string;

    /**
     * @method base()
     * @for kity.Class
     * @protected
     * @grammar base(name, args...) => {any}
     * @description 调用父类指定名称的函数
     * @param {string} name 函数的名称
     * @param {parameter} args... 传递给父类函数的参数
     *
     * @example
     *
     * ```js
     * var Person = kity.createClass('Person', {
     *     toString: function() {
     *         return 'I am a person';
     *     }
     * });
     *
     * var Male = kity.createClass('Male', {
     *     base: Person,
     *
     *     toString: function() {
     *         return 'I am a man';
     *     },
     *
     *     speak: function() {
     *         return this.base('toString') + ',' + this.toString();
     *     }
     * })
     *
     * var bob = new Male();
     *
     * console.log(bob.speak()); // I am a person, I am a man
     *
     * ```
     */
    public base(name: string): Class;

    /**
     * @method callBase()
     * @for kity.Class
     * @protected
     * @grammar callBase(args...) => {any}
     * @description 调用父类同名函数
     * @param {parameter} args... 传递到父类同名函数的参数
     *
     * @example
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return 'I am an animal name ' + this.name;
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     constructor: function(name) {
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return this.callBase() + ', a dog';
     *     }
     * });
     *
     * var dog = new Dog('Dummy');
     *
     * console.log(dog.toString()); // "I am an animal name Dummy, a dog";
     * ```
     */
    public callBase(...args: any[]): Class;

    /**
     * @method callMixin()
     * @for kity.Class
     * @protected
     * @grammar callMixin(args...) => {any}
     * @description 调用 mixins 中同名函数
     * @param {parameter} args... 传递到 mixins 同名函数的参数
     *
     * @example
     *
     * ```js
     * var Skill = kity.createClass('Skill', {
     *     toString: function () {
     *         return 'I can speak';
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     mixins: [Skill],
     *
     *     constructor: function (name) {
     *        this.name = name;
     *     }
     *
     *     toString: function() {
     *         return 'I am ' + this.name + ', ' + this.callMixin();
     *     }
     * });
     *
     * var dog = new Dog('Snoppy');
     *
     * console.log(dog.toString()); // "I am Snoppy, I can speak";
     * ```
     */
    public callMixin(...args: any[]): Class;

    /**
     * @method pipe()
     * @for kity.Class
     * @grammar pipe() => {this}
     * @description 以当前对象为上下文以及管道函数的第一个参数，执行一个管道函数
     * @param  {Function} fn 进行管道操作的函数
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect().pipe(function() {
     *     this.setWidth(500);
     *     this.setHeight(300);
     * });
     * ```
     */
    public pipe(fn: (context: Class) => void): Class;

    /**
     * @method getType()
     * @for kity.Class
     * @grammar getType() => {string}
     * @description 获得对象的类型
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     * var circle = new kity.Circle();
     *
     * console.log(rect.getType()); // "Rect"
     * console.log(rect.getType()); // "Circle"
     * ```
     */
    public getType(): string;

    /**
     * @method getClass()
     * @for kity.Class
     * @grammar getClass() => {Class}
     * @description 获得对象的类
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     *
     * console.log(rect.getClass() === kity.Rect); // true
     * console.log(rect instanceof kity.Rect); // true
     * ```
     */
    public getClass(): Class;
  }

  interface ClassDefines<T = object, U = object> {
    mixins: T[];
    base: U;
    constructor: (...args: any[]) => void;
  }

  /**
   * @method kity.createClass()
   * @grammar kity.createClass(classname, defines) => {Class}
   * @description 创建一个类
   * @param  {string} classname 类名，用于调试的时候查看，可选
   * @param  {object} defines   类定义
   *      defines.base {Class}
   *          定义的类的基类，如果不配置，则表示基类为 kity.Class
   *      defines.mixins {Class[]}
   *          定义的类要融合的类列表
   *      defines.constructor {Function}
   *          定义类的构造函数，如果父类显式定义了构造函数，需要在构造函数中使用 callBase() 方法调用父类的构造函数
   *      defines.* {Function}
   *          定义类的其它函数
   *
   * @example 创建一个类
   *
   * ```js
   * var Animal = kity.createClass('Animal', {
   *     constructor: function(name) {
   *         this.name = name;
   *     },
   *     toString: function() {
   *         return this.name;
   *     }
   * });
   *
   * var a = new Animal('kity');
   * console.log(a.toString()); // "kity"
   * ```
   *
   * @example 继承一个类
   *
   * ```js
   * var Cat = kity.createClass('Cat', {
   *     base: Animal,
   *     constructor: function(name, color) {
   *         // 调用父类构造函数
   *         this.callBase(name);
   *         this.color = color;
   *     },
   *     toString: function() {
   *         return 'A ' + this.color + ' cat, ' + this.callBase();
   *     }
   * });
   *
   * var cat = new Cat('kity', 'black');
   * console.log(cat.toString()); // "A black cat, kity"
   * ```
   *
   * @example 混合类的能力
   * ```js
   * var Walkable = kity.createClass('Walkable', {
   *     constructor: function() {
   *         this.speed = 'fast';
   *     },
   *     walk: function() {
   *         console.log('I am walking ' + this.speed);
   *     }
   * });
   *
   * var Dog = kity.createClass('Dog', {
   *     base: Animal,
   *     mixins: [Walkable],
   *     constructor: function(name) {
   *         this.callBase(name);
   *         this.callMixin();
   *     }
   * });
   *
   * var dog = new Dog('snoppy');
   * console.log(dog.toString() + ' say: ' + dog.walk()); // snoppy say: I am walking fast
   * ```
   */
  function createClass<T = object, U = Object>(
    classname: string,
    defines: ClassDefines<T, U>
  ): T & U;

  /**
   *
   * @param { Function | Class } baseClass
   * @param { object } extension
   */
  function extendClass<T = object, U = object>(
    baseClass: T,
    extension: U
  ): T & U;
}
