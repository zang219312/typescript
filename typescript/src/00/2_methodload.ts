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
// payload: number | MessageType

function getMsg(value: number): Message
function getMsg(value: MessageType, readRecordCount: number): Message[]
function getMsg(
  payload: any,
  readRecordCount: number = 1
): Message[] | Message | undefined {
  if (typeof payload === 'number') {
    return msgs.find(v => v.id === payload)
  }
  return msgs.filter(v => v.type === payload).splice(0, readRecordCount)
}

// console.log(getMsg(8))

getMsg('image', 2).forEach(v => {
  console.log(v)
})

export {}
