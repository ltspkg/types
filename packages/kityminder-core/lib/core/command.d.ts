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

declare namespace kityminder {
  type CommandStateNormal = 0;
  type CommandStateDisabled = -1;
  type CommandStateActived = 1;
  type CommandState =
    CommandStateNormal |
    CommandStateDisabled |
    CommandStateActived;

  /**
   * @class Command
   * @description 表示一个命令，包含命令的查询及执行
   */
  class Command {
    /**
     * @method execute()
     * @description minder执行命令
     *
     * @param { Minder } minder
     * @param { any[] } args
     */
    execute(minder: Minder, ...args: any[]): Error;

    /**
     * @method setContentChanged()
     * @description 设置内容是否变化
     *
     * @param { boolean } changed
     */
    setContentChanged(changed: boolean): void;

    /**
     * @method isContentChanged()
     * @description 返回内容是否变化
     */
    isContentChanged(): boolean;

    /**
     * @method queryState()
     * @description 查询状态，默认正常
     */
    queryState(): CommandStateNormal;

    /**
     * @method queryValue()
     * @description 查询值
     */
    queryValue(): 0;

    /**
     * @method isNeedUndo()
     * @description 是否需要撤销
     */
    isNeedUndo(): boolean;
  }
}
