//type

import { type } from "os"

//Union type  * หรือ | (OR)
type product = number|boolean|"code" //กำหนด type product ให้สามารถเก็บข้อมูล number หรือ boolean หรือ "code"
const productA:product = "code" //ทำการคัดลอกการตั้งค่าการรับตัวชนิดข้อมูลที่รับ และใส่ข้อมูลที่อยู่ในเงื่อนไขของตัวแปร product
//console.log(productA);



//Literal type  *Literal(ตัวอักษร)
type animals = "land animals"|"aquatic animals"|"poultry" //กำหนดให้ตัวแปรรับ type ชนิดข้อมูลแบบตัวอักษร ที่ไม่ใช่ค่าชนิดข้อมูล number|boolean|string แต่เป็นการที่ผู้ใช้ทำการตั้งขึ้นมาเฉพาะ
const animal1:animals = 'aquatic animals'



//การประกาศ type แบบ alias

  //ปกติ
  const company:string = 'companyA'
  
  //การประกาศตัวแปร alias
  type RoleType = "admin"|"user"|"develop"
  const tar:RoleType = "develop"

  type Age = number|string
  const myAge:Age = '23'

  //การนำ type มาทำงานรวมกันในรูปแบบ object type โดยการนำค่าที่กำหนดมาใส่ใน object
  type Employee ={
    role:RoleType,
    age:Age
  }

  //การนำ object type ไปใช้งานต่อกับตัวแปร
  const MyEmployee:Employee = {
    role:'admin',
    age:'23'
  }

  //export การส่งค่าไปใช้ภายนอก /***
  export type Company ={
    CompanyName:"A"|"B"|"C",
    address:string
  }

  //การต่อ type ที่นำค่าจาก type อื่นมาใส่ร่วมกัน
  type Personal = Company & Employee &{ //การต่อ type โดยใช้ & 
    //Personal จะมีข้อมูลที่อยู่ใน Company + Employee + ข้อมูลใหม่ที่สร้างขึ้น
    tel:string,
    status:boolean
  }

  //การกำหนดการนำข้อมูลใน type บางส่วนมาใช้งาน
  const myCompany:Company['CompanyName']='A'//Company['ตัวแปรที่ต้องการ']='ตัวข้อมูลที่ต้องการ'



  //การคัดลอกข้อมูลโดยการอ้างอิง
  const myCompanyA:Company = {
    CompanyName:'A',
    address:'12345'
  }
  const myCompanyB:Company = myCompanyA  //โดยจะทำได้ต้องทำตามเงื่อนไขของ type แม่ที่เป็น Company

  //การตรวจสอบ หรือ Excess properties check
  function onDisplayMyCompany(param:Company){
    return param
  }
  //console.log(onDisplayMyCompany(myCompanyA));

  

  //การประกาศ type ในรูปแบบ function ที่นำไปใช้งานต่อ
  type OnSum = (a:number,b:number)=>number  //(a:number,b:number)=> การกระทำการในรูปแบบ number
  const onSumResult:OnSum=(a,b)=>a+b
  //console.log(onSumResult(1,2));



  //การเปลี่ยนข้อมูล number เป็น string
  type codeA = {
    a:number,
    b:number
  }
  function onCheckCode(p:codeA){
    return `a = ${p.a}, b = ${p.b}`
  }
  //console.log(onCheckCode({a:1,b:2})) //การใช้งาน parameter ที่ใช้ type อ้างอิงและจำเป็นต้องใช้ของมูลภายในจะต้อง {ตัวแปร:ค่าที่ต้องการ,...}

  

//type guard
type Dog ={
  name:string
  species: "DogA"|"DogB"
  key:"dog"
}
type Cat ={
  name:string
  species: "CatA"|"CatB"
  key:"cat"
  color:string
}

function onDisplayPetData(p:Cat|Dog){
  if('Cat' in p){ //ถ้ามีค่า Cat อยู่ใน parameter ให้ return p.species
    return p.species 
  }
  if(p.key === 'dog'){ //ถ้ามีค่า type ใดมี key  = dog มันจะดึงข้อมูล p.species ใช้งาน 
    return p.species 
  }
  if("color" in p){ // มันจะตรวจสอบว่า type ใดมีตัวแปร color และทำการดึงข้อมูล
    return p.species
  }
}
//onDisplayPetData() //ต้องสร้างตัวแปรมารับ type ถึงจะทำได้ไปดู d_discriminatedUnions.ts



//const assertion
const Person = {
  name:'tar',
  age: 23 as 23 //ค่าตัวแปร as ค่าตัวแปร เป็นการเปลียนชนิดข้อมูลที่เป็น string ให้กลายเป็นชนิดข้อมูลเฉพาะคือ age ชนิดข้อมูล 23
}
//Person.age = 24 //เมื่อค่าทำการ ค่าตัวแปร as ค่าตัวแปร จะทำใช้ตัวแปรใน object เป็น readonly


const role = ['admin','develop','ceo','cfo','marketing'] as const //as const ถ้าไม่ใส่มันจะบอกว่ามันไม่ใช่ค่าที่แท้จริง 
//การ as const ของ role คือการทำการเปลียนชนิดข้อมูลของ role ที่เป็น string[] ให้เป็นชนิดข้อมูลเฉพาะคือ readonly ["admin", "develop", "ceo", "cfo", "marketing"]

type role = typeof role[number] //คือการนำตำแหน่งของ array มาให้งานในการค้นหา
//console.log(role[1]);

//การใช้งานกับตัวแปรอื่น
const M:role = 'admin'