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

  interface ViewBoxParam {
    x: number;
    y: number;
    width: number;
    height: number;
  }
  /**
   * @class ViewBox
   * @description 视图盒子
   */
  class ViewBox {
    /**
     * @method getViewBox
     * @description 获取视图盒子坐标和大小
     */
    public getViewBox(): ViewBoxParam;

    /**
     * @method setViewBox
     * @description 设置视图盒子坐标和大小
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public setViewBox(
      x: number,
      y: number,
      width: number,
      height: number
    ): ViewBox;
  }
}
