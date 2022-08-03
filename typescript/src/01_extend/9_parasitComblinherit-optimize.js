function People(name, sex, phone) {
  this.name = name
  this.sex = sex
  this.phone = phone
}

People.prototype.doEat = function () {
  console.log(this.name + ' 去吃饭。。。')
}

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone)
  this.national = national // 民族
}

// 寄生组合继承实现
// 1.构建一个共用的寄生组合继承函数
function _extends(parent, son) {
  function Middle() {
    // 创建一个寄生构造函数
    this.count = 33
    this.constructor = son
  }

  Middle.prototype = parent.prototype
  // 2.创建寄生函数的实例对象
  return new Middle()
}

// 3.chinesePeople 的显示原型指向 第二步创建的实例对象
ChinesePeople.prototype = _extends(People, ChinesePeople)
// ChinesePeople.prototype.constructor = ChinesePeople

const cp1 = new ChinesePeople('王博', '男', 123456, '汉族')
const cp2 = new ChinesePeople('阿兰', '女', 456789, '壮族')
// console.log(ChinesePeople.prototype.__proto__ === People.prototype)  // true
// console.log(cp1.__proto__.__proto__ === People.prototype) // true
console.log('p1', ChinesePeople.prototype)
console.log('p2', cp2)
