type ColorChannel = "r" | "g" | "b" | "a" | "h" | "s" | "l";
type ColorValue = {
  r: number;
  g: number;
  b: number;
  h: number;
  s: number;
  l: number;
  a: number;
};

/**
 * @class kity.Color
 * @description 表示一个颜色
 */
export class Color {
  /**
   * @constructor
   * @for kity.Color
   *
   * @grammar new kity.Color(r, g, b)
   * @grammar new kity.Color(r, g, b, a)
   * @grammar new kity.Color(colorString)
   *
   * @param {number} r 红色分量，取值 0 - 255
   * @param {number} g 绿色分量，取值 0 - 255
   * @param {number} b 蓝色分量，取值 0 - 255
   * @param {number} a 透明度（可选），取值 0 - 100
   * @param {string} colorString 一个代表颜色的字符串，可以是：
   *     熟知颜色表：如 'red', 'yellow'
   *     HEX 表示：如 '#368', '#123456'
   *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
   *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
   */
  public constructor(r: number, g: number, b: number, a?: number);
  public constructor(colorString: string);

  /**
   * @method set()
   * @for kity.Color
   *
   * @description 设置当前颜色某个分量的值
   *
   * @grammar set(name, value) => {this}
   *
   * @param {string} name  要设置的颜色通道的名称
   *     r: 红色（Red），取值范围 [0, 255]
   *     g: 绿色（Green），取值范围 [0, 255]
   *     b: 蓝色（Blue），取值范围 [0, 255]
   *     a: 透明度（Alpha），取值范围 [0, 1]
   *     h: 色环角度（Hue），取值范围 [0, 359]
   *     s: 饱和度（Saturation），取值范围 [0, 100]
   *     l: 亮度（Lightness），取值范围 [0, 100]
   *     r、g、b 值和 h、s、l 值会联动修改
   * @param {number} value 要设置的值
   */
  public set(name: ColorChannel, value: number): Color;

  /**
   * @method inc()
   *
   * @description 返回新的颜色，表示当前颜色增加指定通道的值之后的颜色
   *
   * @grammar inc(name, value) => {this}
   *
   * @param  {string} name  要增加的通道的名称，具体含义请查看 set 方法
   * @param  {number} value 增量值
   */
  public inc(name: ColorChannel, value: number): Color;

  /**
   * @method dec()
   * @for kity.Color
   *
   * @description 返回新的颜色，表示当前颜色减少指定通道的值之后的颜色
   *
   * @grammar dec(name, value) => {this}
   *
   * @param  {string} name  要减少值的通道的名称，具体含义请查看 set 方法
   * @param  {number} value 减量值
   */
  public dec(name: ColorChannel, value: number): Color;

  /**
   * @method clone()
   * @for kity.Color
   *
   * @description 返回当前颜色的一个拷贝
   *
   * @grammar clone() => {kity.Color}
   */
  public clone(): Color;

  /**
   * @method get()
   * @for kity.Color
   *
   * @description 返回当前颜色指定的分量
   *
   * @grammar get() => {number}
   */
  public get(name: ColorChannel): number;

  /**
   * @method getValues()
   * @for kity.Color
   *
   * @description 返回当前颜色的一个字面量表示
   *
   * @return {object} 颜色字面量，其结构为：
   *     {
   *         r: 0,
   *         g: 0,
   *         b: 0,
   *         a: 0,
   *         h: 0,
   *         s: 0,
   *         l: 0
   *     }
   */
  public getValues(): ColorValue;

  /**
   * @method valueOf()
   * @for kity.Color
   *
   * @description 返回当前颜色的一个字面量表示
   *
   * @return {object} 颜色字面量，其结构为：
   *     {
   *         r: 0,
   *         g: 0,
   *         b: 0,
   *         a: 0,
   *         h: 0,
   *         s: 0,
   *         l: 0
   *     }
   */
  public valueOf(): ColorValue;

  /**
   * @method toRGB()
   * @for kity.Color
   *
   * @description 返回当前颜色的 RGB 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
   *
   * @grammar toRGB() => {string}
   */
  public toRGB(): string;

  /**
   * @method toRGBA()
   * @for kity.Color
   *
   * @description 返回当前颜色的 RGBA 表示
   *
   * @grammar toRGBA() => {string}
   */
  public toRGBA(): string;

  /**
   * @method toHEX()
   * @for kity.Color
   *
   * @description 返回当前颜色的 HEX 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
   *
   * @grammar toHEX() => {string}
   */
  public toHEX(): string;

  /**
   * @method toHSL()
   * @for kity.Color
   *
   * @description 返回当前颜色的 HSL 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toHSLA()）方法。
   *
   * @grammar toHSL() => {string}
   */
  public toHSL(): string;

  /**
   * @method toHSLA()
   * @for kity.Color
   *
   * @description 返回当前颜色的 HSLA 表示
   *
   * @grammar toHSLA() => {string}
   */
  public toHSLA(): string;

  /**
   * @method toString()
   * @for kity.Color
   *
   * @description 返回当前颜色的 RGB 或 RGBA 表示，如果颜色有透明度，将使用 RGBA 形式，否则是 RGB 形式
   * @grammar toString() => {string}
   */
  public toString(): string;

  /**
   * @method parse()
   * @static
   * @for kity.Color
   *
   * @description 解析一个颜色字符串为 kity.Color 对象
   *
   * @grammar kity.Color.parse(valStr)
   *
   * @param  {string} valStr 一个代表颜色的字符串，可以是：
   *     熟知颜色表：如 'red', 'yellow'
   *     HEX 表示：如 '#368', '#123456'
   *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
   *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
   */
  public static parse(valStr: string): Color;

  /**
   * @method createHSL()
   * @for kity.Color
   * @static
   *
   * @description 创建一个 HSL 颜色
   *
   * @grammar kity.Color.createHSL(h, s, l) => {kity.Color}
   *
   * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
   * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
   * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
   */
  public static createHSL(h: number, s: number, l: number): Color;

  /**
   * @method createHSLA()
   * @for kity.Color
   * @static
   *
   * @description 创建一个 HSLA 颜色
   *
   * @grammar kity.Color.createHSLA(h, s, l, a) => {kity.Color}
   *
   * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
   * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
   * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
   * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
   */
  public static createHSLA(h: number, s: number, l: number, a: number): Color;

  /**
   * @method createRGB()
   * @for kity.Color
   * @static
   *
   * @description 创建一个 RGB 颜色
   *
   * @grammar kity.Color.createRGB(r, g, b) => {kity.Color}
   *
   * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
   * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
   * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
   */
  public static createRGB(r: number, g: number, b: number): Color;

  /**
   * @method createRGBA()
   * @for kity.Color
   * @static
   *
   * @description 创建一个 RGBA 颜色
   *
   * @grammar kity.Color.createRGBA(r, g, b, a) => {kity.Color}
   *
   * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
   * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
   * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
   * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
   */
  public static createRGBA(r: number, g: number, b: number, a: number): Color;
}
