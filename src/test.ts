
// const a = new Date().toISOString()
// console.log()

//let name = 'test'
//let name2:string = 'test2'

const name = 'J'
function onPrint(p:string){
  //console.log('test',p);
}
//onPrint(name)

const name2:string = "x"
const tt = 'x'
function onPrint2(p:"x"|"t"){
  //console.log('test',p);
}
//onPrint2(tt)

const x:null|string = 'sss'
let b:string = typeof x === 'string'? x : 'gg'


const c:unknown = 'wqdd'//ไม่ควรใช้ any เพราะมันเข้าได้หมด ใช้ unknown แทนเพราะตัวมันยังไม่รู้
function earth(params:string) {
  //console.log(params);
}
if(typeof c === 'string'){
  earth(c)
}


//void
const onSum = (a:number,b:number)=>{
  console.log("a+b :",a+b);  
}
const onSum2 = (a:number,b:number):string=>{
  console.log("a+b :",a+b);  
  return`${a+b}`
}
//onSum2(1,2)

//never
function onFormat(data:string|number|undefined){
  switch (typeof data) {
    case "string":
      return data.charAt(1)
    case "number":
      return data.toFixed(2)
    case"undefined":
      return "a"
    
    default:
      return data
  }
}


//as type
const a = "kaen" as string
//การเปลี่ยน type
const age = "18"
const myAge:number = age as unknown as number

const age1 = "18" as string
const myAge1 = +age1


  //fetch
// const onFethData = async()=>{
//   const res = await fetch("")
//   const response = await res.json() as string
//   return response
// }

//axios
  //export Interface User{
  //  userId:number
  //  ....
  //}
  
// const onAxiosData = async()=>{
//   const res = await axios.get<User>(url:"",
//    config:{
//      decompress:false
//  })
//   return response as number
// }
//onAxiosData().then((res)=>console.log(res.data))

//Array
const myArray:Array<string> = ["sda","812"]
const myArray2:Array<string|null> = ["sda","812"]
const question:boolean[] = [false,true]
const myAge23:(string|null)[]=[null]

//tuple type Array
const hexColor:[number,string,boolean] = [1,'1',false]

//Enum
enum Choice{
  A=0,B=1,C=2
}
function onCheck(param:Choice){
  switch (param) {
    case Choice.A:
      return "asd"
    case Choice.B:
      return "bnm"
    case Choice.C:
      return "cvb"
    default:
      break
  }
}
const myChoice = Choice.A
//console.log(onCheck(myChoice));

//console.log(Choice.A);

//Union type
type Abc = number|boolean|"Ant"
const dws:Abc = 1

//Literal type
type Ca = "Ant"|"Bride"|"Cat"
const myCa:Ca = "Ant"

//Interface

  //ปกติ
// const people:{
//   name:string,
//   age:number,
//   birthDate:string,
//   tel:number,
//   status:"single"|"marry",
//   email:string,
  
// }={
//   name:'sda',
//   age:18,
//   birthDate:"2015-12-12",
//   tel:1515
// }

interface PeopleAActive{
  onGetName : ()=>string
  onGetAge : ()=>number
}

// onGetName:function(){
//   return this.name
// }
interface PeopleA extends PeopleAActive{//extends PeopleAActive การต่อหลายๆ interface รวมกัน
  name:string
  age:number 
   readonly birthDate:string //readonly ไม่สามารถเปลียนได้, readonly<> ใส่ readonly ทุกตัวใน interface
  tel:number
  status:"single" | "marry"
  email?:string//
  //onGetName : ()=>string //จะใช้ this ได้
  //onGetAge : ()=>number
  
}

const Kkk:Partial<PeopleA> ={//Partial เหมือนใส่ ? ให้กับทุกตัวใน interface
  name:'sda',
  age:18,
  // onGetName:()=>Kkk.name,
  // onGetAge:()=>Kkk.age
}
//console.log(Kkk.email?.charAt(2)?? "x");


interface Ff {
  [index:number]:string
}
const hhh:Ff ={
  0:"sda",
  1:"ojf",
  2:"sabn"
}

const Ooo:Ff =["asd","vcvc","daa"]

//interface extends /ค่า extends รับค่าจาก interface แม่ได้มากกว่า 1 ตัว 


//class


class Test{
  readonly x?:number; //readonly อ่านได้เท่านั้นแก้ไขไม่ได้ //? ใส่ข้อมูลก็ได้หรือไม่ใส่ก็ได้
  y!:number;//! ต้องใส่เท่านั้น
  constructor(x:number,y:number){//readonly สามารถ set ค่าได้ที่นี้เท่านั้นที่อืนไม่สามารถ set ได้
    this.x = x
    this.y = y
  }
}
// const t = new Test(1,1);
// //console.log(t);
// t.x = 2
// t.y = 3
//console.log(t);


interface ITest{
  x:number
  y:number
  getX?():number
}
interface ITest2{
  s:string
}

class Abcd{//class แม่
  initial:boolean

  constructor(initial:boolean){
    this.initial = initial
  }
}
//private คือ class อื่นไม่สามารถใช้ได้/public ใช้ได้หมด/protected ใช้ได้เพราะเส้นสายมันเท่านั้น เช่น class ลูก
// class Test2 extends Abcd implements ITest,ITest2 {//extends การรับข้อมูลจาก class แม่แต่จะรับได้แค่ 1 class,implements รับจาก interface ได้มากกว่า1
//   private readonly x!:number; //readonly อ่านได้เท่านั้นแก้ไขไม่ได้ //? ใส่ข้อมูลก็ได้หรือไม่ใส่ก็ได้
//   public y!:number;//! ต้องใส่เท่านั้น
//   protected s:string
//   constructor(x:number,y:number,s:string,initial:boolean){//readonly สามารถ set ค่าได้ที่นี้เท่านั้นที่อืนไม่สามารถ set ได้
//     super(true)//การรับข้อมูลจาก class แม่ ต้องใช้คำสั่ง super
//     this.x = x
//     this.y = y
//     this.s = s
//   }
//   static logTest(){//static สามารถเข้าถึงได้เลยโดยไม่ต้อง new Test2
//     //console.log('test');
//   }
// }
// Test2.logTest()

// const testT = new Test2(1,2,"rsd",true)


//abstract class ใช้ได้แต่แบบ class extends เท่านั้น /การสร้างตัวแปรมาระบุบค่าทำไม่ได้
// abstract class Testyyy{
//   t1:number;
//   t2:number;
//   t3:number;

//   Www(){
//     console.log("www");
    
//   }
// }


//type alias
  //ปกติ
const ONname:string = "ppp"
const role:"admin"|"user"|"develop" = "admin"

interface Role{
  role:"admin"|"user"|"develop"
}

// const Myrole:Role={
//   role:"develop"
// }

  //type alias
type RoleType = "admin"|"user"|"develop"
const tar:RoleType = "develop"

type AgeTar = number|string
const myAgeTar:AgeTar ="23year"

type OnSum = (a:number,b:number)=>number
const onSumResult:OnSum =(a,b)=>a+b

type Employee = {
  role:RoleType,
  age:AgeTar
}
const MyEmployee:Employee ={
  role:'admin',
  age:'59'
}

export type Company ={
  CompanyName:"A"|"B"|"C",
  address:string
}

type Personal = Company & Employee &{
  tel:string,
  status:boolean
}


const myCompany: Company['CompanyName']='B'


//const personal:Personal={}
const ACompany:Company = {//quick fix => add
  CompanyName: "A",
  address: ""
}
const tCompany = {//quick fix => add
  CompanyName: "A",
  address: ""
}

const EeCompany:Company = ACompany


//Excess properties check

function onDisplayMyCompany(param:Company){}
//onDisplayMyCompany(tCompany)//ไม่ผ่าน param ตรงกัน
onDisplayMyCompany(EeCompany)


type OnFgh ={
  a:number
  b:number
}
function SumOnFgh(param:OnFgh){
  return `A = ${param.a}, B = ${param.b}`
}
//console.log(SumOnFgh({a:1,b:2}));

  //การเขียนคำอธิบายใน typescript
/**
 * @description sdadadf
 * @param param -{a:number, b:number}
 */


//Function overloading

const isNumber = (param:unknown):param is number =>{ //type guard
  return typeof param === "number"
}

function Fgh(a:number,b:number):number
function Fgh(a:string,b:number):number
function Fgh(a:unknown,b:number){
  if (isNumber(a)) return a+b
  if (typeof a === "string") return +a + b
  if (typeof a === 'boolean') return 0
  throw new Error("Error")
}
//console.log(Fgh(1,2));
//console.log(Fgh("1",2));
//console.log(Fgh(false,2));


//type guard
type Dog ={
  name:string
  species: "dogA"|"dogB"
  key:"dog"
}
type Cat ={
  name:string
  species: "CatA"|"CatB"
  key:"Cat"
  color:string
}
function onDisplayPetData(param: Cat|Dog){
  if("Cat" in param){
    return param.species
  }
  if(param.key === "dog"){
    return param.species
  }
  if("color" in param){
    return param.species
  }
}

//const assertion
const I = {
  name : 'I',
  age: 23 as 23 //หรือ const ก็ได้
}
//I.age = 200 //ไม่สามารถเปลี่ยนได้

const Rrole = ['admin','develop','ceo','cfo','marketing'] as const //as const ถ้าไม่ใส่มันจะบอกว่ามันไม่ใช่ค่าที่แท้จริง 
type Rrole = typeof Rrole[number]//ตำแหน่งของ array มาใช้
const gggt:Rrole = "admin"


//advanced Type
type VerticalAlignment = 'top'|'bottom'
type HorizontalAlignment = 'left'|'right'
type Alignment = `${VerticalAlignment} ${HorizontalAlignment}` //การต่อข้อมูล

type A = string
type B = number
type C = A&B //a กับ b มาร่วมกัน

//keyof
interface Person{
  name:string
  age:number
  address:string
  // status:boolean
}
type PeronKey = keyof Person
const person:PeronKey = 'name'
//PersonAge = string Person["age"]
type PersonAge = Person["age"]
//PersonValues string|number|boolean
type PersonValues = Person[keyof Person]

const Aperson:Person ={
  name:"a",
  age:28,
  address:'123'
}
function ApersonShow(PeronKey:keyof Person){
  console.log(`Person value of ${PeronKey}`,Aperson[PeronKey]); 
}
//ApersonShow('age');

//
interface States{
  [state:string]:boolean //คือทั้งหมดใน interface ตัวแปรเป็น string ค่าเป็น boolean
}
const state:States = {enabled:true,a:true}
