// * 1.定义是不明确使用时必须明确成某种具体数据类型的数据类型
// * 2.编译期间进行数据类型安全检查的数据类型
// ? 1.泛型是参数化的数据类型
// ? 泛型形参类型必须是 A-Z 的任意字母
// 泛型的any化
// 泛型的默认值
class ArrayList<T = {}> {
  public index: number = 0
  public ele: Array<T>

  constructor() {
    this.ele = []
  }


  // 往数组中添加元素
  public add(ele: T) {
    this.checkIndex()
    this.ele[this.index++] = ele
  }

  checkIndex() {
    if (this.index < 0) {
      throw new Error('索引不能小于0')
    }
  }

  // 根据索引查询数组中的指定元素
  get(index: number): T {
    return this.ele[index]
  }

  remove(index: number): number
  remove(ele: object): object
  // remove(value: number | object): number | object {
  remove(value: any): any {
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

type stuType = { stuName: string, age: number }
const stu1: stuType = { stuName: '王小明', age: 18 }
const stu2: stuType = { stuName: '小红', age: 18 }
const arr = new ArrayList<string>()
arr.add('abc')  // Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(arr.get(0))

const arr2 = new ArrayList<number>()
arr2.add(123)
console.log(arr2.get(0))

const arr3 = new ArrayList<typeof stu1>()
arr3.add(stu1)
arr3.add(stu2)
console.log(arr3.get(0))
console.log(arr3.get(1))
export {}
