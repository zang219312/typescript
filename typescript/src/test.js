function QQUser(no) {
  this.no = no
}

QQUser.prototype.commonFriends = ['好友1111', '好友222', '好友3333']
QQUser.prototype.show = function show() {
  console.log(this.no)
}

const zs = new QQUser('2324674973')
zs.show()
console.log(zs.commonFriends)

QQUser.prototype = {
  commonFriends: ['aaa', 'bbb', 'ccc']
}

// QQUser.prototype 指向了新的对象
// 但是原来的显示原型和隐式原型指向的对象还在 ，有__proto__指向
console.log(zs.commonFriends)
console.log('QQUser.prototype.commonFriends ', QQUser.prototype.commonFriends)
