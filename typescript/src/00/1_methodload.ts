type MessageType = 'image' | 'audio' | string
type Message = {
  id: number
  type: MessageType
  sendMsg: string
}

const msgs: Message[] = [
  {
    id: 1,
    type: 'image',
    sendMsg: 'aaaaaaa'
  },
  {
    id: 2,
    type: 'image',
    sendMsg: 'bbbbbbb'
  },
  {
    id: 3,
    type: 'audio',
    sendMsg: 'ccccccc'
  },
  {
    id: 4,
    type: 'image',
    sendMsg: 'ddddddd'
  },
  {
    id: 5,
    type: 'audio',
    sendMsg: 'eeeeeee'
  }
]

// 不用函数重载
// 如果参数是数字 就返回与数字相等的消息，否则当类型，返回这个类型的全部消息
function getMsg(
  value: number | MessageType
): Message | undefined | Array<Message> {
  if (typeof value === 'number') {
    return msgs.find(v => v.id === value)
  }
  return msgs.filter(v => v.type === value)
}

console.log(getMsg(8))
console.log(getMsg('audio'))

const msg = <Message>getMsg(1)
console.log(msg.sendMsg)

export {}
