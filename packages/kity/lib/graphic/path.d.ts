import { Shape } from "./shape";
import { Geometry, PathSegment } from "./geometry";

type PathCMD = "M" | "m" | "L" | "l" | "A" | "a" | "C" | "c" | "Z" | "z"

/**
 * @class Path
 * @description 表示一个绘制图形命令
 */
export class Path extends Shape {
  /**
   * @constructor
   * @param  {string | PathSegment} data 路径数据
   */
  public constructor(data: string | PathSegment);

  /**
   * @method setPathData()
   * @description 设置路径数据
   * @param { string | PathSegment } data
   */
  public setPathData(data: string | PathSegment): Path;

  /**
   * @method getPathData()
   * @description 获取路径数据
   */
  public getPathData(): string;

  /**
   * @method getDrawer()
   * @description 获取画手
   */
  public getDrawer(): PathDrawer;

  /**
   * @method isClosed()
   * @description 判断路径是否已经画完
   */
  public isClosed(): boolean;
}

/**
 * @class PathDrawer
 * @description 表示绘制图形画笔
 */
export class PathDrawer {
  /**
   * @constructor
   * @param  {Path} path 路径
   */
  public constructor(path: Path);

  /***
   * @method getPath()
   * @description 获取path
   */
  public getPath(): Path;

  /**
   * @method redraw()
   * @description 重新绘制
   */
  public redraw(): PathDrawer;

  /**
   * @method done()
   * @description 将path队列绘制命令一次全部执行
   */
  public done(): PathDrawer;

  /**
   * @method clear()
   * @description 清除path队列,并将画笔移至原点
   */
  public clear(): PathDrawer;

  /**
   * @method push()
   * @description 添加绘制命令进行绘制
   * @param {string} cmd
   * @param {number[]} args
   */
  public push(cmd: PathCMD, ...args: number[]): PathDrawer;

  /**
   * @method moveTo()
   * @description 移动画笔至某处（path，绝对定位）
   * @param {number} x
   * @param {number} y
   */
  public moveTo(x: number, y: number): PathDrawer;

  /**
   * @method moveBy()
   * @description 移动画笔至某处（path，相对定位）
   * @param {number} dx
   * @param {number} dy
   */
  public moveBy(dx: number, dy: number): PathDrawer;

  /**
   * @method lineTo()
   * @description 画直线至某处（path，绝对定位）
   * @param {number} x
   * @param {number} y
   */
  public lineTo(x: number, y: number): PathDrawer;

  /**
   * @method lineBy()
   * @description 画直线至某处（path，相对定位）
   * @param {number} dx
   * @param {number} dy
   */
  public lineBy(dx: number, dy: number): PathDrawer;

  /**
   * @method arcTo()
   * @description 画弧（path，绝对定位）
   * @param {number} rx
   * @param {number} ry
   * @param {number} xr
   * @param {number} laf
   * @param {number} sf
   * @param {number} x
   * @param {number} y
   */
  public arcTo(rx: number, ry: number, xr: number, laf: number, sf: number, x: number, y: number): PathDrawer;

  /**
   * @method arcBy()
   * @description 画弧（path，相对定位）
   * @param {number} rx
   * @param {number} ry
   * @param {number} xr
   * @param {number} laf
   * @param {number} sf
   * @param {number} dx
   * @param {number} dy
   */
  public arcBy(rx: number, ry: number, xr: number, laf: number, sf: number, dx: number, dy: number): PathDrawer;

  /**
   * @method carcTo()
   * @description 画圆（path，绝对定位)
   * @param {number} r
   * @param {number} laf
   * @param {number} sf
   * @param {number} x
   * @param {number} y
   */
  public carcTo(r: number, laf: number, sf: number, x: number, y: number): PathDrawer;

  /**
   * @method carcBy()
   * @description 画圆（path，相对定位）
   * @param {number} r
   * @param {number} laf
   * @param {number} sf
   * @param {number} dx
   * @param {number} dy
   */
  public carcBy(r: number, laf: number, sf: number, dx: number, dy: number): PathDrawer;

  /**
   * @method bezierTo()
   * @description 贝塞尔曲线（绝对定位）
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @param {number} x
   * @param {number} y
   */
  public bezierTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): PathDrawer;

  /**
   * @method bezierBy()
   * @description 贝塞尔曲线（相对定位）
   * @param {number} dx1
   * @param {number} dy1
   * @param {number} dx2
   * @param {number} dy2
   * @param {number} dx
   * @param {number} dy
   */
  public bezierBy(dx1: number, dy1: number, dx2: number, dy2: number, dx: number, dy: number): PathDrawer;

  /**
   * @method close()
   * @description 结束画手
   */
  public close(): PathDrawer;
}

