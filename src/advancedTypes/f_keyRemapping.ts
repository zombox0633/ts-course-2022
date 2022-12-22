//keyRemapping

interface Person {
  name: string
  age: number
}



/**
 * TODO: 1
 * Example.
 */
// type PersonSubscribers = {
//*1A   name: /*2B/ (key: "name", value: string) => void 
//   age: (key: "age", value: number) => void
// }

type PersonSubscribers = {
  [k in keyof Person] : (key:k,value:Person[k]) => void
  //*1A [k in keyof Person] คือ [key ที่เป็นตัวแปรภายใน Person]
  //*2B : (key:"name",value:Person[k]) => void คือ (key:parameter(k),value:ชนิดข้อมูลของตัวแปรภายใน Person) => void ไม่มีการกำหนดการ return
}



/**
 * TODO: 2
 * Example.
 */
// type PersonSubscribersAddChangeWord = {
//   nameOnChange: (key: "name", value: string) => void;
//   ageOnChange: (key: "age", value: number) => void;
// }

type PersonSubscribersAddChangeWord = {
  [k in keyof Person as `${k}OnChange`] : (key:k,value:Person[k]) => void
  //[k in keyof Person as `${k}OnChange`] คือ [key ที่เป็นตัวแปรภายใน Person] as k ที่เป็นชื่อตัวแปรต่อด้วย OnChange
  // (key:k,value:Person[k]) คือ (key:parameter(k),value:ชนิดข้อมูลของตัวแปรภายใน Person)=> void ไม่มีการกำหนดการ return
}

