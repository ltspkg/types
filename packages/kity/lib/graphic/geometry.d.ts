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
  type PathSegment = [string, number, number][] | [string][];

  type Geometry = g;

  /**
   * @class Geometry
   * @description 表示一个路径
   */
  class g {
    /**
     *
     * kity.g.pathToString(pathSegment)
     * @method pathToString()
     * @description 返回表示 PathSegment 的字符串
     *
     * @param  {PathSegment | string} pathSegment
     *     要表示的 Path Segment
     *
     * @return {string} 表示该 Path 的字符串
     *
     * @example
     *
     *     var pathSegment = [['M', 0, 0], ['L', 10, 10]]
     *     var pathString = kity.g.pathToString(pathSegment);
     *     // 返回 'M0,0L10,10'
     */
    public pathToString(pathSegment: PathSegment | string): string;

    /**
     * kity.g.parsePathString(pathString)
     * @method parsePathString()
     * @description 解析 Path 字符串成 PathSegment
     *
     * @copyright rapheal.js
     *
     * @example
     *
     *     var seg = kity.g.parsePathString('M10,12l21-23-21.5,11z');
     *     // 返回: [['M', 10, 12], ['l', 21, -23], ['l', -21.5, 11], ['z']]
     *
     * @param  {string} pathString Path 字符串
     * @return {PathSegment}
     */
    public parsePathString(pathString: string): PathSegment;

    /**
     * kity.g.pathToAbsolute(path)
     * @method pathToAbsolute
     * @description 把路径转换为绝对路径的形式
     *
     * @param {PathSegment|string} path
     *     要转换的 path 路径或者数组
     *
     * @return {PathSegment}
     *     转换后的 Path Segment
     *
     * @example
     *
     *     var path = 'M10,10l50,50';
     *     var absPath = kity.g.pathToAbsolute(path);
     *     // 返回 [['M', 10, 10], ['L', 60, 60]]
     */
    public pathToAbsolute(path: string | PathSegment): PathSegment;

    /**
     * kity.g.pathToCurve(path)
     * @method pathToCurve()
     * @description 把路径转换为贝塞尔路径
     *
     * @param  {Array|String} path
     *     要转换的 path 路径或数组
     *
     * @return {Array}
     *     转换后的 PathSegment，每一段都是 'C'
     */
    public pathToCurve(path: string | PathSegment): PathSegment;

    /**
     * kity.g.cutBezier(bezierArray, t)
     * @method cutBezier
     * @description 在指定位置把贝塞尔曲线切割为两部分
     *
     * @param {number[]} bezierArray
     *     表示贝塞尔曲线的一个数组 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *     p1 和 p2 是贝塞尔曲线的起点和终点，c1 和 c2 是两个控制点
     *
     * @param {number} t
     *     切割的位置（0 到 1）
     *
     * @return {number[][]}
     *     切割的两个贝塞尔曲线：[
     *         [p1x1, p1y1, c1x1, c1y1, c2x1, c2y1, p2x1, p2y1],
     *         [p1x2, p1y2, c1x2, c1y2, c2x2, c2y2, p2x2, p2y2]
     *     ]
     *
     */
    public cutBezier(bezierArray: number[], t: number): number[][];

    /**
     * @method subBezier()
     * @description 求一段贝塞尔曲线的子段
     *
     * @param {number[]} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {number} t
     *     子段的结束位置（0 到 1）
     *
     * @param {number} t0
     *     字段的开始位置（0 到 t），可不传，默认为 0
     *
     * @return {number[]}
     *     长度为 8 的数组，表示给定贝塞尔曲线的子段
     */
    public subBezier(bezierArray: number[], t: number, t0: number): number[];

    /**
     * @method pointAtBezier()
     * @description 求贝塞尔曲线上的一个点
     *
     * @param {number[]} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {number} t
     *     所求点的开始位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
    public pointAtBezier(bezierArray: number[], t: number): Point;

    /**
     * @method bezierLength()
     * @description 求贝塞尔曲线的长度
     *
     * @param {number[]} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {number} tolerate
     *     允许的误差，默认是 0.1
     *
     * @return {number} 贝塞尔曲线的长度
     */
    public bezierLength(bezierArray: number[], tolerate: number): number;

    /**
     * @method subPath()
     * @description 求一段路径的子路径
     *
     * @param  {string | PathSegment} path
     *     原路径
     *
     * @param  {number} t1
     *     要求的子路径的结束位置（0 到 1）
     *
     * @param  {number} t0
     *     要求的子路径的开始位置（0 到 t1），可不传，默认为 0
     *
     * @return {PathSegment}
     *     子路径的 PathSegment
     */
    public subPath(
      path: string | PathSegment,
      t1: number,
      t0: number
    ): PathSegment;

    /**
     * @method pointAtPath()
     * @description 求路径上的一个点
     *
     * @param  {PathSegment| string} path
     *     要求点的路径
     *
     * @param  {number} t
     *     要求的点的位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
    public pointAtPath(path: PathSegment, t: number): Point;

    /**
     * @method pathLength()
     * @description 求一段路径的长度
     *
     * @param  {string|PathSegment} path
     *     要求的路径
     *
     * @return {number}
     *     路径的长度
     */
    public pathLength(path: string | PathSegment): number;

    /**
     * @method pathKeyPoints()
     * @description 求一段路径的关键点
     *
     * @param  {string| PathSegment } path
     *     要求的路径
     *
     * @return {PathSegment}
     *     关键点的集合
     */
    public pathKeyPoints(path: string | PathSegment): PathSegment;

    /**
     * @method alignCurve()
     * @description 获得两个路径的补间结果
     *
     * @param  {string| PathSegment} path1
     *     补间起始路径
     *
     * @param  {string | PathSegment} path2
     *     补间结束路径
     *
     * @return {[PathSegment, PathSegment]}
     *     补间的结果
     */
    public alignCurve(
      path1: string | PathSegment,
      path2: string | PathSegment
    ): [PathSegment, PathSegment];

    /**
     * @method pathTween()
     * @description 获得两个路径的补间结果
     *
     * @param  {string| PathSegment} path1
     *     补间起始路径
     *
     * @param  {string | PathSegment} path2
     *     补间结束路径
     *
     * @param  {number} t
     *     补间比例，0 返回跟 path1 等效的结果；1 返回跟 path2 等效的结果
     *
     * @return {PathSegment}
     *     补间的结果
     */
    public pathTween(
      path1: string | PathSegment,
      path2: string | PathSegment,
      t: number
    ): PathSegment;

    /**
     * @method transformPath()
     * @description 变换指定的路径
     *
     * @param  {string|PathSegment} path
     *     需要变换的路径
     *
     * @param  {Matrix} matrix
     *     使用的变换矩阵
     *
     * @return {PathSegment}
     *     变换后的路径
     */
    public transformPath(
      path: string | PathSegment,
      matrix: Matrix
    ): PathSegment;
  }
}
