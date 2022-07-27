type type_ChartParam = {
  // 各种图形的求面积的参数
  width?: number
  height?: number
  radius?: number
}

// 计算正方形面积
class Square {
  public width: number
  public height: number

  constructor(width: number, height: number) // 重载签名
  constructor(obj: type_ChartParam)
  // constructor(value: number | type_ChartParam)
  constructor(objOrWidth_: any, height_: number = 0) {
    // 实现签名
    console.log(objOrWidth_, height_)
    if (typeof objOrWidth_ === 'object') {
      this.width = objOrWidth_.width
      this.height = objOrWidth_.height
    } else {
      this.width = objOrWidth_
      this.height = height_
    }
  }

  public getArea(): number {
    return this.width * this.height
  }
}

const square = new Square(40, 50)
console.log(square.getArea())

const chartParam: type_ChartParam = {
  width: 40,
  height: 50
}
const square2 = new Square(chartParam)
console.log(square2.getArea())
