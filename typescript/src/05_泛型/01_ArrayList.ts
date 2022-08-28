// 1.对现有数组封装，让数组增删改更好用
// 2.提供get，remove，add 方法
class ArrayList {
  public index: number = 0
  public ele: Array<object> =  []

  constructor() {
    console.log(this)
  }


  // 往数组中添加元素
  public add(ele: object) {
    this.checkIndex()
    this.ele[this.index++] = ele
  }

  checkIndex() {
    if (this.index < 0) {
      throw new Error('索引不能小于0')
    }
  }

  // 根据索引查询数组中的指定元素
  get(index: number): object {
    return this.ele[index]
  }

  remove(index: number): number
  remove(ele: object): object
  remove(value: number | object): number | object {
    this.ele = this.ele.filter((v, k) => {
      if (typeof value === 'number') {
        return value !== k
      }
      return value !== v
    })
    return value
  }

  show() {
    this.ele.forEach(v => {
      console.log(v)
    })
  }
}

const stu1 = {stuName: '小明', age: 18}
const stu2 = {stuName: '小红', age: 18}
// const arr = new ArrayList([stu1, stu2])
const arr = new ArrayList()
arr.add(stu1)
arr.add(stu2)

console.log(arr.get(0))
console.log(arr.get(1))

export {}
