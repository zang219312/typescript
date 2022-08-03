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

const middle = { count: 24 }
middle.__proto__ = People.prototype
ChinesePeople.prototype = middle
ChinesePeople.prototype.constructor = ChinesePeople

const cp1 = new ChinesePeople('王博', '男', 123456, '汉族')
const cp2 = new ChinesePeople('阿兰', '女', 456789, '壮族')

console.log('p1', cp1)
console.log('p2', cp2)
