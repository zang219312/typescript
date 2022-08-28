class Person {
  public name: string = 'noname'
  public age: number | undefined
  public phone!: string
  public address: string[] = ['浙江', '上海']
  public addrArr: Array<string> = ['北京']
  public foo: () => number = (): number => {
    return 1
  }
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_
    this.age = age_
    this.phone = phone_
  }

  public doEat(who: string, addr: string): void {
    console.log(`${who}在${addr}吃饭`)
  }

  public doStep() {
    console.log('do something ')
  }
}

const zs = new Person('张三', 25, '123545649')
console.log(zs)
zs.doEat('李四', '王府井')

import myStorage from './5_MyStorage'
const ins = myStorage.getInstance()
const ins2 = myStorage.getInstance()
console.log(ins === ins2)
console.log('getTotal 1: ', myStorage.getTotal())
myStorage.addTotal()
console.log('getTotal 2: ', myStorage.getTotal())
myStorage.addTotal()
console.log('getTotal 3: ', myStorage.getTotal())

import newTotal from './test2'
console.log('🚀 ~  ~ newTotal', newTotal)

ins.getItem('aa')

import m2 from './5_MyStorage2'
m2.storageInstance.setItem('name', 'zd')
