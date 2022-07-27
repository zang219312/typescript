function Parent(name = '', age = 0) {
  this.name = name
  this.age = age

  console.log('Parent constructor', this.name)
}

Parent.prototype.friends = ['张三', '李四']
Parent.prototype.eat = function eat() {
  console.log(this.name + ' 吃饭')
  return this
}

function Son(name, age, favorite, sex) {
  this.favorite = favorite
  this.sex = sex
  Parent.apply(this, [name, age])
}
const P1 = new Parent()
console.log('P1: ', P1)

Son.prototype = P1
Son.prototype.constructor = Son

const s1 = new Son('王五', 19, '打篮球', '男')
console.log(' s1: ', s1.eat())

const s2 = new Son('赵六', 23, '游泳', '男')
console.log(' s2的朋友: ', s2.friends)
/**
 * !借用构造函数+原型链继承组合模式的不足
 * ? 调用了2次父类构造函数
 *  ? 1.进入Parent函数为属性赋值，分配内存空间，浪费内存
 *  ? 2.赋值导致效率下降，new Parent() 赋的值无意义，出现代码冗余；new Son 出来的对象和这些值好不相干，是通过子类中的apply来向父类赋值
 */
// console.log(s1.__proto__ === Son.prototype) // true
// console.log(P1.__proto__ === Parent.prototype) // true
// console.log(Parent.prototype.__proto__ === Object.prototype)  // => true
// console.log(P1.__proto__.__proto__ === Object.prototype)  // => true
// console.log(s1.__proto__.__proto__.__proto__ === Object.prototype)  // => true
