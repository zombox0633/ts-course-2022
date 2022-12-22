/**
 * Lesson 
 * Generic Types กับ Type Aliases และ Interfaces
 */

interface Dict<T> { //Dict<T>  คือ type parameter * T คือ ตัวแปรที่นิยามขึ้นเพื่อใช้แทน
  [k:string]:T 
  //[k:string] คือ [key(parameter ชื่ออะไรก็ได้แต่เป็น string) ที่ค่าเป็น string]
  //:T คือ ชนิคข้อมูลตาม type parameter
}


//การสร้าง function ลองรับการทำงาน Dict<T>
function createObject<T>(keys:string[],value:T):Dict<T> {
  //createObject<T>(keys: Array string, value:T):Dict<T> คือ createObject<T> รับชนิดข้อมูลที่อ้างอิงในการใส่ข้อมูลของ value:T และ Dict<T> เป็นตัวอ้างอิงในการ return ในรูปแบบ Dict<T>

  return keys.reduce((result,k) => ({...result,[k]:value}),{})
  //keys = :string[].reduce(result(parameter),k ที่ทำการดึงมาใช้งานโดย Dict<T>) => 
  //({{...result(parameter) ทำการคัดลอก,[k]:value ตัวแปรภายใน Array ที่ค่าเท่ากับ value ของ T},{} ทำตามการกำหนดของ reduce)

  //reduce(วิธีลดเรียกฟังก์ชัน)
}

//การใช้งาน function
const result = createObject<number>(['A','B','C'],0)
//createObject<number>กำหนดให้ชนิดข้อมูลที่ใส่ value เป็น number
//(['A','B','C'],0) คือ (key ถูกกำหนดให้เป็น string[] , ใส่ค่าที่เป็น number ตามที่ createObject<number> กำหนด)

//console.log(result);
