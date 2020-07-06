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

  type PathCMD = "M" | "m" | "L" | "l" | "A" | "a" | "C" | "c" | "Z" | "z";

  /**
   * @class Path
   * @description 表示一个绘制图形命令
   */
  class Path extends Shape {
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
   * @interface PathDrawer
   * @description 表示绘制图形画笔接口
   */
  interface PathDrawer {
    /**
     * @constructor
     * @param  {Path} path 路径
     */
    new (path: Path): PathDrawer;

    /***
     * @method getPath()
     * @description 获取path
     */
    getPath(): Path;

    /**
     * @method redraw()
     * @description 重新绘制
     */
    redraw(): PathDrawer;

    /**
     * @method done()
     * @description 将path队列绘制命令一次全部执行
     */
    done(): PathDrawer;

    /**
     * @method clear()
     * @description 清除path队列,并将画笔移至原点
     */
    clear(): PathDrawer;

    /**
     * @method push()
     * @description 添加绘制命令进行绘制
     * @param {string} cmd
     * @param {number[]} args
     */
    push(cmd: PathCMD, ...args: number[]): PathDrawer;

    /**
     * @method moveTo()
     * @description 移动画笔至某处（path，绝对定位）
     * @param {number} x
     * @param {number} y
     */
    moveTo(x: number, y: number): PathDrawer;

    /**
     * @method moveBy()
     * @description 移动画笔至某处（path，相对定位）
     * @param {number} dx
     * @param {number} dy
     */
    moveBy(dx: number, dy: number): PathDrawer;

    /**
     * @method lineTo()
     * @description 画直线至某处（path，绝对定位）
     * @param {number} x
     * @param {number} y
     */
    lineTo(x: number, y: number): PathDrawer;

    /**
     * @method lineBy()
     * @description 画直线至某处（path，相对定位）
     * @param {number} dx
     * @param {number} dy
     */
    lineBy(dx: number, dy: number): PathDrawer;

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
    arcTo(
      rx: number,
      ry: number,
      xr: number,
      laf: number,
      sf: number,
      x: number,
      y: number
    ): PathDrawer;

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
    arcBy(
      rx: number,
      ry: number,
      xr: number,
      laf: number,
      sf: number,
      dx: number,
      dy: number
    ): PathDrawer;

    /**
     * @method carcTo()
     * @description 画圆（path，绝对定位)
     * @param {number} r
     * @param {number} laf
     * @param {number} sf
     * @param {number} x
     * @param {number} y
     */
    carcTo(
      r: number,
      laf: number,
      sf: number,
      x: number,
      y: number
    ): PathDrawer;

    /**
     * @method carcBy()
     * @description 画圆（path，相对定位）
     * @param {number} r
     * @param {number} laf
     * @param {number} sf
     * @param {number} dx
     * @param {number} dy
     */
    carcBy(
      r: number,
      laf: number,
      sf: number,
      dx: number,
      dy: number
    ): PathDrawer;

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
    bezierTo(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      x: number,
      y: number
    ): PathDrawer;

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
    bezierBy(
      dx1: number,
      dy1: number,
      dx2: number,
      dy2: number,
      dx: number,
      dy: number
    ): PathDrawer;

    /**
     * @method close()
     * @description 结束画手
     */
    close(): PathDrawer;
  }
}
