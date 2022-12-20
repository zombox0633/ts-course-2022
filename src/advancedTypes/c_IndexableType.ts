//IndexableType การระบุตัวแปรภายในโดยใช้ parameter และค่าทั้งหมดที่เป็นชนิดเดียวกัน


interface States{
  [p:string]:boolean
  //[p:string]คือ p = parameter จะเป็นชื่ออะไรก็ได้ที่เป็น string /และชนิดข้อมูลทั้งหมดของ interface จะเป็น boolean 
}

//แสดงการใช้งาน
const StateA:States = {A:false,B:true}