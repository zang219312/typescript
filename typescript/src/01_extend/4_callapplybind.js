const myObj = {
  name: '孙悟空',
  age: 500
}
const peopleObj = {
  name: 'zd',
  ppl_age: this.age,
  eat(address, who) {
    this.address = address
    this.who = who
    // console.log('this ', this === myObj) // => true
    console.log(
      `${this.name} 被关了${this.age}年，和 ${this.who} 在 ${this.address} 吃饭`
    )
    return 3
  }
}

console.log('  19 ~ myObj', myObj)

// peopleObj.eat.call(myObj, '王府井', 38)
peopleObj.eat.apply(myObj, ['王府井', 38])

console.log('  24 ~ myObj', myObj)
