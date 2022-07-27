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
// 1.创建一个寄生构造函数
function Middle() {
  this.count = 33
}
Middle.prototype = People.prototype
// 2.创建寄生函数的实例对象
// 3.chinesePeople 的显示原型指向 第二部创建的实例对象
ChinesePeople.prototype = new Middle()
//
const cp1 = new ChinesePeople('王博', '男', 123456, '汉族')
const cp2 = new ChinesePeople('阿兰', '女', 456789, '壮族')

console.log(cp1)
console.log(cp2)
