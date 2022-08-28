// 饿汉式
// 1.把构造器设为私有的，不允许外部创建实例
// 2.建立一个静态引用属性，同时把这个静态引用属性直接指向一个对象【new ClassName】
// 3.外部调用
export default class MyStorage {
  static storageInstance: MyStorage = new MyStorage()

  private constructor() {
    console.log('私有的构造器')
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value = localStorage.getItem(key)
    return value != null ? JSON.parse(value) : null
  }
}
