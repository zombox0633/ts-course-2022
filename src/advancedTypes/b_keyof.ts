//keyof การคัดลอกของ keyof จะคัดลอกตัวแปรภายใน หรือชนิดข้อมูลของตัวแปร


interface Person{
  name:string
  age:number
  address:string
}

type PersonKey = keyof Person //keyof คือการคัดลอก ตัวแปรภายใน type หรือ interface *ไม่ได้คัดลอกข้อมูล
const PersonName:PersonKey = 'age'
//console.log(typeof PersonName); //ค่าที่ได้คือ=>age, typeof=>string


//การระบุบตัวแปรภายใน interface หรือ type ในการคัดลอกเฉพาะชนิดข้อมูล
type PersonAge = Person['age']
const PersonAgeA:PersonAge = 18 //typeof => number 
//console.log(PersonAgeA);


//การนำ interface Person มาทำการ[keyof Person] คือการคัดลอกเฉพาะชนิดข้อมูลที่มีอยู่ของ Person
type PersonValues = Person[keyof Person]
const PersonValueA:PersonValues = '18' //typeof=>string|number
//console.log(typeof PersonValueA); //PersonValueA ค่าเป็น string เพราะที่ตัวมันเก็บข้อมูล '18' ที่เป็น string


const PersonA:Person = {
  name: 'A',
  age: 18,
  address: '123'
}

function onShow(p:keyof Person){//parameter คือ ตัวแปรที่อยู่ภายใน Person
  console.log(`Person value of ${p} = ${PersonA[p]}`);
  // ${p} คือตัวแปรที่อยู่ภายใน Person / ${PersonA[p]} คือ ค่าของตัวแปรภายในที่ถูก parameter จับไว้ หรือที่กำหนดไว้
}
//onShow('name') //ระบุตัวแปรภายใน PersonA
