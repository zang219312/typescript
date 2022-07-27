function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.friends = ['aaaaa', 'bbbbbbb']
Parent.prototype.eat = function () {
  console.log(this.name + 'is eating')
}

function Son(favor, sex) {
  this.favor = favor
  this.sex = sex
}

const parent = new Parent('张三', 23)
console.log('🚀 ~ parent ', parent)

const son = new Son('basketball', '男')
console.log('🚀 ~  son', son)

console.log('Son.prototype', Son.prototype)

// 原型链继承
// 子类可以访问父类的实例属性
// 子类可以访问父类原型对象空间中的属性和方法
Son.prototype = new Parent('李四', 39)
// 让Son的对象或函数原型.prototype指向的原型对象空间有一个constructor属性
// 指向了Son构造函数对象空间
Son.prototype.constructor = Son
console.log(Son.prototype === Parent.prototype) // => false
console.log('继承后的Son.prototype', Son.prototype)

const son2 = new Son('football', 16)
console.log('🚀 ~  son2', son2)
console.log('🚀 ~  son2访问Son自身的favor属性', son2.favor)
console.log('🚀 ~  son2访问Son自身的name', son2.name)
console.log('🚀 ~  friends', son2.friends)
