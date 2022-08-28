// 可变元组 POI
// let [uname, age]: [string, number,string,string,string] = ["wangwu", 23,
//   "海口海淀岛四东路3号", "133123333", "一路同行,一起飞"]

// let [uname, age]: [string, number, ...any[]] = ["wangwu", 23,
//   "海口海淀岛四东路3号", "133123333", "一路同行,一起飞",23,"df"]

// let [uname, age, ...rest]: [string, number, ...any[]] = ["wangwu", 23,
//   "海口海淀岛四东路3号", "133123333", "一路同行,一起飞", 23, "df"]
// [ '海口海淀岛四东路3号', '133123333', '一路同行,//一起飞', 23, 'df' ]

// 元组标签
let [uname, age, ...rest]: [name_: string, age_: number, ...rest: any[]] = ["wangwu", 23,
  "海口海淀岛四东路3号", "133123333", "一路同行,一起飞", 23, "df"]
console.log("username:", uname)//wangwu
console.log("age:", age)//23
console.log("rest:", rest)
