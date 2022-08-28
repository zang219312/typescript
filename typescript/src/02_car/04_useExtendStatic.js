const extendsStatic = require('./04_extendsStatic')

function People(name, sex, phone) {
  this.name = name
  this.sex = sex
  this.phone = phone
}

People.count = 26

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone)
  this.national = national // 民族
}

extendsStatic(ChinesePeople,People)

console.log(ChinesePeople.count)
