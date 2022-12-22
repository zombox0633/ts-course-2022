//mappedTypes

interface Course{
  title: string
  credit: number
}



/**
 * TODO: 1. 
 */
// type CourseReadOnly = {
//*1A   readonly title :  string /(*1B)
//  readonly credit : number
// }

type CourseReadOnly = {
  readonly [k in keyof Course]:Course[k]
  //*1A readonly [k in keyof Course] คือ อ่านได้เท่านั้น[key ที่เป็นตัวแปรที่อยู่ใน Course]
  //*1B :Course[k] ค่าของข้อมูลภายในของ k(key หรือ parameter)
}



/**
 * TODO: 2.
 */
// type CourseReadOnlyWithDescription = {
//  readonly title : string
//  readonly credit : number
//  description : string
// }

type CourseReadOnlyWithDescription = CourseReadOnly & {
  description : string
  //คือการนำ type ของ CourseReadOnly มาเพิ่ม description
}

//การนำไปใช้กับตัวแปร
const C:CourseReadOnlyWithDescription = {
  title:'C',
  credit:1,
  description:'abc'
}



/**
 * TODO: 3.
 */
// type CourseOptional = {
//   title?: string
//   credit?: number
// }

type CourseOptional = {
  [k in keyof Course]? : Course[k]
  //3A [k in keyof Course]? คือ [key ที่เป็นตัวแปรภายในของ Course]มีหรือไม่มีก็ได้ /ชนิดข้อมูลที่ Course กำหนด|undefined
  //3B :Course[k] คือ ชนิดข้อมูลของตัวแปรภายใน Course
}



/**
 * TODO: 4. 
 * Without  `?`
 * การลบ ? ของ CourseOptional ออก
 */

type CourseOptionalWithDescription = {
  [k in keyof CourseOptional]-? : CourseOptional[k]
}