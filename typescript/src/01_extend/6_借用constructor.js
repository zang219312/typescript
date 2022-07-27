function Parent(name = '', age = 0) {
  this.name = name
  this.age = age
}

Parent.prototype.friends = ['张三', '李四']
Parent.prototype.eat = function eat() {
  console.log(this.name + ' 吃饭')
}

function Son(name, age, favorite, sex) {
  this.favorite = favorite
  this.sex = sex
  Parent.call(this, name, age)
}
const s1 = new Son('王五', 19, '打篮球', '男')
console.log('s1: ', s1)

const s2 = new Son('赵六', 23, '游泳', '男')
console.log('s2: ', s2)
/**
 * ! 借用构造函数继承（冒充对象继承）的不足
 * ? 借用构造函数实现了子类构造向父类构造函数传递参数，但没有继承父类原型的属性和方法，无法访问父类原型上的属性和方法
 */
