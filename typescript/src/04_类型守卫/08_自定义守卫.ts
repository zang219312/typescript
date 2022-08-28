interface TestInter {
  username: string,
  age: number,

  eat(): void,

  allowInput?: 1
}

class StringUtils2 {//工具类

  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "")
  }

}

const testObj2: TestInter = {
  username: " wan  g wu",
  age: 23,
  eat() {
    console.log(StringUtils2.trimSpace(this.username) + " 吃饭")
  },
  allowInput: 1
}

/**
 * 判断是否是字符串的自定义守卫方法
 */
//function isString(str: any): boolean {
function isString(str: any): str is string {
  return typeof str === "string"
}

function isFunction(data: any): data is Function {
  return typeof data === "function"
}

function processObjOutput2(obj: any) {

  if (obj && "allowInput" in obj) {// 判断allowInput属性或者方法在 obj 对象中是否存在
    let value: unknown;
    Object.keys(obj).forEach((key) => {
      value = obj[key];
      if (isString(value)) {
        console.log(key + ":", StringUtils2.trimSpace(value));
      }
      if (isFunction(value)) {
        value.call(obj);
      }
    })
  } else {
    console.log("不是一个合法的对象。")
  }
}

processObjOutput2(testObj2)
