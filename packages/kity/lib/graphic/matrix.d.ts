import { Box } from "./box";
import { Point } from "./point";
import { PathSegment } from "./geometry";

type MatrixValue = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

export type CTMRefer = "screen" | "doc" | "paper" | "view" | "top" | "parent" | object;

/**
 * @class Matrix
 * @description 表示一个矩阵
 */
export class Matrix {
  /**
   * @property m
   * @for Matrix
   * @type {MatrixValue}
   * @readOnly
   * @description 矩阵值
   */
  protected m: MatrixValue;

  /**
   * @method translate()
   * @description 沿着x,y轴位移
   * @param {number} x
   * @param {number} y
   */
  public translate(x: number, y: number): Matrix;

  /**
   * @method rotate()
   * @description 规定参数2D旋转
   * @param {number} deg
   */
  public rotate(deg: number): Matrix;

  /**
   * @method scale()
   * @description 沿着x,y 轴2D缩放转换
   * @param {number} sx
   * @param {number} sy
   */
  public scale(sx: number, sy: number): Matrix;

  /**
   * @method skew()
   * @description 沿着x,y轴2D倾斜转换
   * @param {number} degX
   * @param {number} degY
   */
  public skew(degX: number, degY: number): Matrix;

  /**
   * @method inverse()
   * @description 获得反转矩阵
   */
  public inverse(): Matrix;

  /**
   * @method setMatrix()
   * @description 设置矩阵
   *
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @param {number} e
   * @param {number} f
   */
  public setMatrix(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): Matrix;

  /**
   * @method getMatrix()
   * @description 获取矩阵
   *
   * @example
   *
   * var value = matrix.getMatrix();
   *
   * console.log(value); // {a: 0, b: 0, c: 0, d:0, e: 0, f: 0}
   */
  public getMatrix(): MatrixValue;

  /**
   * @method getTranslate()
   * @description 获取位移数值
   *
   * @example
   *
   * var value = matrix.getTranslate();
   *
   * console.log(value); // {x: 0, y: 0}
   */
  public getTranslate(): { x: number; y: number };

  /**
   * @method mergeMatrix()
   * @description 合并矩阵
   * @param { Matrix } matrix
   */
  public mergeMatrix(matrix: Matrix): Matrix;

  /**
   * @method merge()
   * @description 合并矩阵
   * @param { Matrix } matrix
   */
  public merge(matrix: Matrix): Matrix;

  /**
   * @method valueOf()
   * @description 矩阵数值
   *
   * @example
   *
   * var value = matrix.valueOf();
   *
   * console.log(value); // [0, 0, 0, 0, 0, 0]
   */
  public valueOf(): [number, number, number, number, number, number];

  /**
   * @method toString()
   * @description 矩阵字符串
   */
  public toString(): string;

  /**
   * @method equals()
   * @description 判断矩阵是否相等
   * @param matrix
   */
  public equals(matrix: Matrix): boolean;

  /**
   * @method clone()
   * @description 克隆矩阵
   */
  public clone(): Matrix;

  /**
   * @method transformPath()
   * @description 根据matrix转换path
   * @param { string | PathSegment} path
   */
  public transformPath(path: string | PathSegment): PathSegment;

  /**
   * @method parse
   * @static
   * @description 解析矩阵
   * @param {number[] | string} param
   *
   * @example
   *
   * var matrix = Matrix.parse([1,2,3,4,5,6])
   *
   * var matrix2 = Matrix.parse("matrix(1,2,3,4,5,6)");
   */
  public static parse(param: number[] | string): Matrix;

  /**
   * @method transformPoint
   * @static
   * @description 给定坐标（x,y）按照矩阵转换
   * @param { number } x
   * @param { number } y
   * @param { Matrix } m
   */
  public static transformPoint(x: number, y: number, m: Matrix): Point;

  /**
   * @method transformBox
   * @static
   * @description 将box按照矩阵转换
   * @param { Box } box
   * @param { Matrix } matrix
   */
  public static transformBox(box: Box, matrix: Matrix): Box;

  /**
   * @method getCTM
   * @static
   * @description 获得从 node 到 refer 的变换矩阵
   * @param target
   * @param refer
   */
  public static getCTM(target: any, refer: CTMRefer): Matrix;
}
