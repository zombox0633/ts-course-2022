/**
 * Lesson : Pick and Omit
 */

type Person = {
  name: string
  age: number
  address: string
}

// TODO: type MyNameAndAge = MyPick<Person, "name"> เลือกตัวแปรที่อยู่ใน type

type PickPerson<T, K extends keyof T> = { [P in K]: T[P]; }
//<T, K extends keyof T> คือ parameter T และ K ที่ดึงข้อมูล ชื่อตัวแปรภายใน T
//[P in K]  คือ [P in K]  P ที่เป็น ชนิดข้อมูลของ K
//: T[P]; คือ P ที่เป็นตัวแปรของ T

//การใช้ Pick<ชื่อ type ที่ต้องการเลือกข้อมูล, ตัวแปรภายใน>
type MyPickA = Pick<Person,'address'>
type MyPickB =  Pick<Person,'address'| 'age'>



// TODO: type MyAddress = MyOmit<Person, "name" | "age">
type MyOmit = Omit<Person,'name'>
//นำตัวที่เลือกออก