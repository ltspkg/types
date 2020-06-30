/**
 * @class EventHandler
 * @description 事件处理器
 */
export class EventHandler {

  /**
   * @method addEventListener
   * @description 添加事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public addEventListener(type: string, handler: (...args: any) => void): EventHandler;

  /**
   * @method addOnceEventListener
   * @description 添加一次性事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public addOnceEventListener(type: string, handler: (...args: any) => void): EventHandler;

  /**
   * @method removeEventListener
   * @description 移除事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public removeEventListener(type: string, handler?: (...args: any) => void): EventHandler;

  /**
   * @method on
   * @description 添加事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public on(type: string, handler: (...args: any) => void): EventHandler;

  /**
   * @method once
   * @description 添加一次性事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public once(type: string, handler: (...args: any) => void): EventHandler;

  /**
   * @method off
   * @description 移除事件处理器
   * @param { string } type
   * @param { function } handler
   */
  public off(type: string, handler?: (...args: any) => void): EventHandler;

  /**
   * @method trigger
   * @description 触发事件
   * @param { string } type
   * @param { any } params
   */
  public trigger(type: string, params: any): EventHandler;


  /**
   * @method fire
   * @description 触发事件
   * @param { string } type
   * @param { any } params
   */
  public fire(type: string, params: any): EventHandler;
}
