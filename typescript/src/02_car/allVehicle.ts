// 父类 Vehicle 交通工具
class Vehicle {
  public brand: string; // 品牌
  public vehicleNo: string; // 车牌号
  public days: number; // 租赁天数
  public total!: number; // 总费用
  public deposit: number; // 押金

  constructor(brand_: string, vehicleNo_: string, days_: number, deposit_: number) {
    this.brand = brand_
    this.vehicleNo = vehicleNo_
    this.days = days_
    this.deposit = deposit_
  }

  // 计算租车的价格
  public calculateRent(): number {
    console.log(this.brand + " : " + this.vehicleNo + '问价中。。。') // 写入日志
    return 0
  }

  // 支付押金
  public payDeposit(): void {
    console.log(this.brand + '车牌号位:' + this.vehicleNo + '支付了：' + this.deposit)
  }

  // 安全检测
  public safeShow(): void {
    console.log(this.brand + '车牌号位:' + this.vehicleNo + '违规了：')
  }
}

class Car extends Vehicle {
  public genre: string;

  constructor(brand_: string, vehicleNo_: string, days_: number, deposit_: number, type_: string) {
    // Vehicle.call(brand_, vehicleNo_, days_, total_, deposit_)
    super(brand_, vehicleNo_, days_, deposit_);
    this.genre = type_
  }

  public getPriceByType(): number {
    let rentMoneyByDay: number = 0
    if (this.genre === '普拉多') {
      rentMoneyByDay = 800
    }
    if (this.genre === '凯美瑞') {
      rentMoneyByDay = 400
    }
    if (this.genre === '威驰智行版') {
      rentMoneyByDay = 200
    }

    return rentMoneyByDay
  }

  // override
  public calculateRent(): number {
    console.log('car', this)
    super.calculateRent() //=> Vehicle.prototype.calculateRent.call(this)
    return this.days * this.getPriceByType()
  }
}

const car = new Car('普拉多', '浙A11111', 3, 8000, '普拉多')
const total = car.calculateRent()
console.log(total)
