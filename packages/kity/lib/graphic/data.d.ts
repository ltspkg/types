/**
 * @class Data
 * @description 表示一个数据
 */
export class Data {
   /**
   * @property _data
   * @type {object}
   * @readOnly
   * @description 数据容器
   */
  private _data: object;

  /**
   * @constructor
   * @for Data
   */
  public constructor();

  /**
   * @method setData()
   * @description 设置数据
   */
  public setData<V = any>(name: string, value: V): Data;

  /**
   * @method getData()
   * @description 获取数据
   */
  public getData<V = any>(name: string): V;

  /**
   * @method removeData()
   * @description 移除数据
   */
  public removeData(name: string): Data;
}
