function RootClass() {
}

RootClass.rootName = 'rootName'
// console.log(RootClass.__proto__ === Function.prototype) // true

const People = function (name, sex, phone) { // 父类 构造函数
  this.name = name
  this.sex = sex
  this.phone = phone
}
// console.log(People.__proto__ === Function.prototype) // true
People.__proto__ = RootClass

// TS 类 双重性质 new实例时TS类是类型 当用TS类直接获取对象时就是对象
// JS 函数 双重性质 new实例时JS函数是类型 当用JS函数直接获取属性时就是对象
// JS函数为对象时 可以获取 prototype,__proto__,自己定义的静态方法
People.count = 26 // 静态属性 => TS中的static属性
People.commonDes = function () { // 静态方法
  console.log('describe')
}

People.prototype.doEat = function () {
  console.log(this.name + '吃饭')
}

const people = new People('张三', '男', '000x')
console.log('people', people)

// console.log(people.__proto__.__proto__ === Object.prototype) // true

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone)
  this.national = national
}

// 第一种：ES5
/*for (const key in People) {
  if (Object.prototype.hasOwnProperty.call(People, key)) {
    console.log('inner - key', key) // 静态属性和方法
    ChinesePeople[key] = People[key] // 子类继承父类的静态方法和属性，也是挂在在构造函数本身
  }
}*/

// 第二种：
/*Object.keys(People).forEach(key => {
  ChinesePeople[key] = People[key]
})*/

// 第三种：
// ChinesePeople.__proto__ = People
// 第四种：
Object.setPrototypeOf(ChinesePeople, People)

ChinesePeople.commonDes()
console.log('静态属性-count：', ChinesePeople.count)
console.log('静态属性-rootName：', ChinesePeople.rootName)

const cp1 = new ChinesePeople('阿兰', '女', 456789, '壮族')
console.log('cp1', cp1)
// console.log(cp1.__proto__.constructor === ChinesePeople) true
