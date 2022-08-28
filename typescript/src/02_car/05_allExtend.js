const __extends = (function () {
  function getStaticExtendWithForIn(Son, Parent) {
    for (const key in Parent) {
      if (Object.prototype.hasOwnProperty.call(Parent, key)) {
        Son[key] = Parent[key]
      }
    }
  }

  function getStaticExtendWithObjKeys(Son, Parent) {
    Object.keys(Parent).forEach(key => {
      Son[key] = Parent[key]
    })
  }

  function getStaticExtendWithProto(Son, Parent) {
    Son.__proto__ = Parent
  }

  const extendStatics = function (Son, Parent) {
    const staticsExtend = Object.setPrototypeOf || getStaticExtendWithForIn || getStaticExtendWithObjKeys || getStaticExtendWithProto
    return staticsExtend(Son, Parent)
  }
  return function (Son, Parent) {
    extendStatics(Son, Parent)

    function Middle() {
      this.constructor = Son
    }

    if (Parent) {
      Middle.prototype = Parent.prototype
      Son.prototype = new Middle()
    } else {
      Son.prototype = Object.create(null)
    }
  }
})()

const Vehicle = (function () {
  function Vehicle(brand_, vehicleNo_, days_, deposit_) {
    this.brand = brand_;
    this.vehicleNo = vehicleNo_;
    this.days = days_;
    this.deposit = deposit_;
  }

  // 计算租车的价格
  Vehicle.prototype.calculateRent = function () {
    console.log(this.brand + " : " + this.vehicleNo + '问价中。。。'); // 写入日志
    return 0;
  };
// 支付押金
  Vehicle.prototype.payDeposit = function () {
    console.log(this.brand + '车牌号位:' + this.vehicleNo + '支付了：' + this.deposit);
  };
// 安全检测
  Vehicle.prototype.safeShow = function () {
    console.log(this.brand + '车牌号位:' + this.vehicleNo + '违规了：');
  };

  Vehicle.count = 27
  return Vehicle
})()

const Car = (function (parent) {
  __extends(Car, parent)

  function Car(brand_, vehicleNo_, days_, deposit_, type_) {
    parent.call(this, brand_, vehicleNo_, days_, deposit_)
    this.type = type_
  }

  Car.prototype.getPriceByType = function () {
    var rentMoneyByDay = 0;
    if (this.type === '普拉多') {
      rentMoneyByDay = 800;
    }
    if (this.type === '凯美瑞') {
      rentMoneyByDay = 400;
    }
    if (this.type === '威驰智行版') {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  };

  Car.prototype.calculateRent = function () {
    parent.prototype.calculateRent.call(this)
    return this.days * this.getPriceByType()
  }

  return Car;
})(Vehicle)

const car = new Car('普拉多', '浙A11111', 3, 8000, '普拉多');
const total = car.calculateRent();
console.log(total);
console.log(Car.count)
