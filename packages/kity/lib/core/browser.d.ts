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
  namespace Browser {
    /**
     * @property platform
     * @description 获取浏览器所在系统,"Win"->Windows;"Mac"->Mac;"Lux"->Linux
     * @type { string }
     */
    const platform: "Win" | "Mac";

    /**
     * 猎豹,区分两种不同内核
     */
    const lb: boolean;

    /**
     * 搜狗
     */
    const sg: boolean;

    /**
     * 百度
     */
    const bd: boolean;

    /**
     * edge浏览器
     */
    const edge: boolean;

    /**
     * chrome初始化为false
     * @type {boolean}
     */
    const chrome: boolean;

    /**
     * @property opera
     * @for kity.Browser
     * @description 判断是否为 Opera 浏览器
     * @type {boolean}
     */
    const opera: boolean;

    /**
     * @property ie
     * @for kity.Browser
     * @description 判断是否为 IE 浏览器
     * @type {boolean}
     */
    const ie: boolean;

    /**
     * @property webkit
     * @for kity.Browser
     * @description 判断是否为 Webkit 内核的浏览器
     * @type {boolean}
     */
    const webkit: boolean;

    /**
     * @property gecko
     * @for kity.Browser
     * @description 判断是否为 Gecko 内核的浏览器
     * @type {boolean}
     */
    const gecko: boolean;

    /**
     * @property mac
     * @for kity.Browser
     * @description 判断是否为 Mac 下的浏览器
     * @type {boolean}
     */
    const mac: boolean;

    /**
     * @description 是否兼容 ie >= 6; gecko >= 10801; opera >= 9.5; air >= 1; webkit >= 522;
     */
    const isCompatible: boolean;

    /**
     * @property version
     * @for kity.Browser
     * @description 获取当前浏览器的版本
     * @type {number}
     */
    const version: number;
  }
}
