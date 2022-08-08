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

ChinesePeople.prototype.getHukou = function () {
  console.log('hu kou')
}

const _extends = (parent) => {
  const middle = { count: 25 }
  /*const newMiddle = Object.setPrototypeOf(middle, parent.prototype)
  console.log('middle:  ', middle)
  console.log('newMiddle:  ', newMiddle)
  // newMiddle.__proto__ = parent.prototype
  return newMiddle*/
  return Object.setPrototypeOf(middle, parent.prototype)
}
console.log('middle: ', _extends(People))
// 当前ChinesePeople显示原型上的方法被覆盖了，无法访问 getHukou
ChinesePeople.prototype = _extends(People)
ChinesePeople.prototype.constructor = ChinesePeople

const cp1 = new ChinesePeople('王博', '男', 123456, '汉族')
const cp2 = new ChinesePeople('阿兰', '女', 456789, '壮族')

console.log('p1', cp1)
console.log('p2', cp2)
