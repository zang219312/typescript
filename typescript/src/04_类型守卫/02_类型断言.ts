//  大厂TS类型守卫晋级考核题【综合题】:
//  请编写一个操作对象方法和属性的函数实现以下功能
//   1. 当对象字符串属性有空格时就去掉空格后输出.
//   2. 当遇到对象方法时就执行,其他数据类型的属性一律直接输出
//   3.只有对象中包含 allowOutput 属性时,才允许输出。
//   4. 函数接收到外部传入的null,undefined,{}时，直接输出不是一个合法的对象。
//  考核点：1. 考核对类型守卫的熟练运用程度 2.静态方法
interface TestInter {
  username: string,
  age: number,

  eat(): void,

  allowOutput?: 1
}

const testObj: TestInter = {
  username: " wan  g wu",
  age: 23,
  eat() {
    console.log(StringUtil.trimSpace(this.username) + " 吃饭")
  },
  allowOutput: 1
}

class StringUtil {//工具类
  public static trimSpace(str: string, val: string = ""): string {
    return str.replace(/\s+/g, val)
  }
}


function processObjOutput(obj: any) {
  if (obj == null || Object.keys(obj).length === 0) {
    console.log('不是一个合法的对象')
    return
  }
  if ('allowOutput' in obj) {
    console.log('allowOutput 存在')
    let val;
    Object.keys(obj).forEach(key => {
      val = obj[key]
      if (typeof val === "string") {
        val = StringUtil.trimSpace(val)
        console.log(key, val)
      } else if (typeof val === 'function') {
        obj[key]()
      } else {
        console.log(key, val)
      }
    })
  }
}

processObjOutput(testObj)
processObjOutput({})
