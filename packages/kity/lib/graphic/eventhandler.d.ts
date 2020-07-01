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
  /**
   * @interface EventHandler
   * @description 事件处理器接口
   */
  interface EventHandler {
    /**
     * @method addEventListener
     * @description 添加事件处理器
     * @param { string } type
     * @param { function } handler
     */
    addEventListener(
      type: string,
      handler: (...args: any) => void
    ): EventHandler;

    /**
     * @method addOnceEventListener
     * @description 添加一次性事件处理器
     * @param { string } type
     * @param { function } handler
     */
    addOnceEventListener(
      type: string,
      handler: (...args: any) => void
    ): EventHandler;

    /**
     * @method removeEventListener
     * @description 移除事件处理器
     * @param { string } type
     * @param { function } handler
     */
    removeEventListener(
      type: string,
      handler?: (...args: any) => void
    ): EventHandler;

    /**
     * @method on
     * @description 添加事件处理器
     * @param { string } type
     * @param { function } handler
     */
    on(type: string, handler: (...args: any) => void): EventHandler;

    /**
     * @method once
     * @description 添加一次性事件处理器
     * @param { string } type
     * @param { function } handler
     */
    once(type: string, handler: (...args: any) => void): EventHandler;

    /**
     * @method off
     * @description 移除事件处理器
     * @param { string } type
     * @param { function } handler
     */
    off(type: string, handler?: (...args: any) => void): EventHandler;

    /**
     * @method trigger
     * @description 触发事件
     * @param { string } type
     * @param { any } params
     */
    trigger(type: string, params: any): EventHandler;

    /**
     * @method fire
     * @description 触发事件
     * @param { string } type
     * @param { any } params
     */
    fire(type: string, params: any): EventHandler;
  }
}
