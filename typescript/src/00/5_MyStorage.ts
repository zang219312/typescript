// 懒汉式
// 1.把构造器设为私有的，不允许外部创建实例
// 2.提供一个外部访问的方法或属性（静态方法），外部可以通过这个方法或属性
// 3.外部调用
export default class MyStorage {
  static storageInstance: MyStorage
  private static total: number = 0
  private constructor() {
    console.log('构造函数')
  }

  public static getInstance() {
    // 静态方法不能访问实例属性或实例方法
    if (!this.storageInstance) {
      //
      this.storageInstance = new MyStorage()
    }
    return this.storageInstance
  }

  public static addTotal() {
    this.total += 3
  }

  public static getTotal() {
    return this.total
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    console.log('get')

    const value = localStorage.getItem(key)
    return value != null ? JSON.parse(value) : null
  }
}
// TS 类可以访问prototype属性,但无法在prototype原型对象上添加新的属性和方法
// 对已有的方法可以覆盖
MyStorage.prototype.getItem = function () {
  console.log(12333)
}

console.log(MyStorage.prototype)
