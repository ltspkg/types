/**
 * @class kity.Box
 * @description 表示一个矩形区域
 */
export class Box {
  /**
   * @property x
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的 x 坐标
   */
  public x: number;

  /**
   * @property y
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的 y 坐标
   */
  public y: number;

  /**
   * @property width
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的宽度
   */
  public width: number;

  /**
   * @property height
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的高度
   */
  public height: number;

  /**
   * @property left
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的最左侧坐标，等价于 x 的值
   */
  public left: number;

  /**
   * @property right
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的最右侧坐标，等价于 x + width 的值
   */
  public right: number;

  /**
   * @property top
   * @for kity.Box
   * @type {Number}
   * @readOnly
   * @description 矩形区域的最上侧坐标，等价于 y 的值
   */
  public top: number;

  /**
   * @property bottom
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的最下侧坐标，等价于 y + height 的值
   */
  public bottom: number;

  /**
   * @property cx
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的中心 x 坐标
   */
  public cx: number;

  /**
   * @property cy
   * @for kity.Box
   * @type {number}
   * @readOnly
   * @description 矩形区域的中心 y 坐标
   */
  public cy: number;

  /**
   * @constructor
   * @for kity.Box
   *
   * @grammar new kity.Box(x, y, width, height)
   * @grammar new kity.Box(box)
   *
   * @param  {number} x|box.x      矩形区域的 x 坐标
   * @param  {number} y|box.y      矩形区域的 y 坐标
   * @param  {number} width|box.width   矩形区域的宽度
   * @param  {number} height|box.height 矩形区域的高度
   *
   * @example
   *
   * ```js
   * var box = new kity.Box(10, 20, 50, 50);
   * var box2 = new kity.Box({x: 10, y: 20, width: 50, height: 50});
   * ```
   */
  public constructor(x: number, y: number, width: number, height: number);

  /**
   * @method getRangeX()
   * @for kity.Box
   * @description 获得矩形区域的 x 值域
   *
   * @grammar getRangeX() => {Number[]}
   *
   * @example
   *
   * var box = new kity.Box(10, 10, 30, 50);
   * console.log(box.getRangeX()); // [10, 40]
   */
  public getRangeX(): [number, number];

  /**
   * @method getRangeY()
   * @for kity.Box
   * @description 获得矩形区域的 y 值域
   *
   * @grammar getRangeY() => {number[]}
   *
   * @example
   *
   * var box = new kity.Box(10, 10, 30, 50);
   * console.log(box.getRangeY()); // [10, 60]
   */
  public getRangeY(): [number, number];

  /**
   * @method merge()
   * @for kity.Box
   * @description 把当前矩形区域和指定的矩形区域合并，返回一个新的矩形区域（即包含两个源矩形区域的最小矩形区域）
   *
   * @grammar merge(another) => {kity.Box}
   * @param  {kity.Box} another 要合并的矩形区域
   *
   * @example
   *
   * ```js
   * var box1 = new kity.Box(10, 10, 50, 50);
   * var box2 = new kity.Box(30, 30, 50, 50);
   * var box3 = box1.merge(box2);
   * console.log(box3.valueOf()); // [10, 10, 70, 70]
   * ```
   */
  public merge(another: Box): Box;

  /**
   * @method intersect()
   * @for kity.Box
   * @description 求当前矩形区域和指定的矩形区域重叠的矩形区域
   *
   * @grammar intersect(another) => {kity.Box}
   * @param  {kity.Box} another 要求重叠的矩形区域
   *
   * @example
   *
   * ```js
   * var box1 = new kity.Box(10, 10, 50, 50);
   * var box2 = new kity.Box(30, 30, 50, 50);
   * var box3 = box1.intersect(box2);
   * console.log(box3.valueOf()); // [30, 30, 20, 20]
   * ```
   */
  public intersect(another: Box): Box;


  /**
   * @method expand()
   * @for kity.Box
   * @description 扩展（或收缩）当前的盒子，返回新的盒子
   *
   * @param {number} top
   *     矩形区域的上边界往上扩展的值；如果是负数，则上边界往下收缩
   *
   * @param {number} right
   *     [Optional] 矩形区域的右边界往右拓展的值；
   *                如果是负数，则右边界往左收缩；
   *                如果不设置该值，使用和 top 同样的值。
   *
   * @param {number} bottom
   *     [Optional] 矩形区域的下边界往下拓展的值；
   *                如果是负数，则下边界往上收缩；
   *                如果不设置该值，使用和 top 同样的值。
   *
   * @param {number} left
   *     [Optional] 矩形区域的左边界往左拓展的值;
   *                如果是负数，则左边界往右收缩;
   *                如果不设置该值，使用和 right 同样的值。
   *
   * @example
   *
   * ```js
   * var box = new kity.Box(10, 10, 20, 20);
   * var box1 = box.expand(10); // [0, 0, 40, 40]
   * var box2 = box.expand(10, 20); // [0, -10, 40, 60]
   * var box3 = box.expand(1, 2, 3, 4); // [9, 8, 24, 26]
   * ```
   */
  public expand(top: number, right: number, bottom: number, left: number): Box;

  /**
   * @method valueOf()
   * @for kity.Box
   * @description 返回当前盒子的数组表示
   *
   * @grammar valueOf() => {Number[]}
   *
   * @example
   *
   * ```js
   * var box = new kity.Box(0, 0, 200, 50);
   * console.log(box.valueOf()); // [0, 0, 200, 50]
   * ```
   */
  public valueOf(): [number, number, number, number];

  /**
   * @method toString()
   * @for kity.Box
   * @description 返回当前盒子的字符串表示
   *
   * @grammar toString() => {string}
   *
   * @example
   *
   * ```js
   * var box = new kity.Box(0, 0, 200, 50);
   * console.log(box.toString()); // "0 0 200 50"
   */
  public toString(): string;

  /**
   * @method isEmpty()
   * @for kity.Box
   * @description 判断当前盒子是否具有尺寸（面积大
   *
   * @grammar isEmpty() => {boolean}
   *
   * @example
   * ```js
   * var box = new kity.Box(0, 0, 0, 100000);
   * console.log(box.isEmpty()); // true
   * ```
   */
  public isEmpty(): boolean;

  /**
   * @method parse()
   * @static
   * @for kity.Box
   * @description 解析一个字符串或数组为 kity.Box 对象
   *
   * @grammar kity.Box.parse(any) => {kity.Box}
   *
   * @param  {number[] | string} arg 要解析的字符串或数组
   *
   * @example
   *
   * ```js
   * console.log(kity.Box.parse('0 0 100 200'));
   * console.log(kity.Box.parse([0, 0, 100, 200]));
   * ```
   */
  public static parse(arg: number[] | string): Box;
}
