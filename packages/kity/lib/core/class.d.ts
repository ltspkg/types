export namespace KityClass {
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
  function createClass<T = object, U = Object>(classname: string, defines: ClassDefines<T, U>): T & U;

  /**
   *
   * @param { Function | Class } baseClass
   * @param { object } extension
   */
  function extendClass<T = object, U = object>(baseClass: T, extension: U): T & U;
}


