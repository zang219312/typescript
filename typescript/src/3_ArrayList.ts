// 1.对现有数组封装，让数组增删改更好用
// 2.提供get，remove，add 方法
class ArrayList {
  constructor(public ele: Array<object>) {
    console.log(this)
  }

  // 根据索引查询数组中的指定元素
  get(index: number) {
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
const stu1 = { stuName: '小明', age: 18 }
const stu2 = { stuName: '小红', age: 18 }
const arr = new ArrayList([stu1, stu2])
arr.show()
// 传下标删除,返回数字
// 传对象删除,返回删除的对象
const result = arr.remove(stu1)
console.log('res', result)
arr.show()
