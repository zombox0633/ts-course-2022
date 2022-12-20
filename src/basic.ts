//Primetime data type of TypeScript

// string !== String(Class)
//number
//boolean 
//null
//undefined
//bigint
//symbol
//any  เป็นค่าอะไรก็ได้
//unknown  ไม่รู้เป็นค่าอะไรแต่จะมีค่ามาใส่
//never  เป็นค่าที่ไม่มีวันที่จะเกิดหรือทำการเช็คค่านี้เป็นตัวสุดท้าย
//ค่า[]  คือค่าอะไรก็ได้แต่เป็น Array เช่น number[],string[]



//typescript ตัวอย่างการกำหนดชนิดข้อมูลให้แปร
const A:number = 1 //การกำหนดชนิดข้อมูลให้เป็น number เท่านั้นไม่สามารถใส่ค่าที่เป็นชนิดข้อมูลอื่นได้

const B:number|string = '1'//การกำหนดชนิดข้อมูลให้ตัวแปรเป็น number หรือ string ก็ได้แต่ไม่สามารถใส่ค่าที่เป็นชนิดข้อมูลอื่นได้

const C:string|null = 'C sting'//การกำหนดชนิดข้อมูลให้ตัวแปรเป็น string หรือ null ก็ได้
let c:string = typeof C === 'string'? C:'null'
//c มีค่าเป็น string = typeof(คือการตรวจค่าของ C) === ค่า string ถ้าจริงแสดงค่าที่อยู่ใน C ถ้าไม่ใช่ string แสดงข้อความ 'null'
//console.log(c);

const D:unknown = true//ตัวแปร D ชนิดข้อมูลคือไม่รู้เป็นค่าอะไรแต่จะมีค่ามาใส่
//การตั้งชนิดข้อมูลไม่ควรใช้ any เพราะมันเข้าได้หมด ใช้ unknown แทนเพราะตัวมันยังไม่รู้แต่จะมีค่ามาใส่



//typescript ตัวอย่างการกำหนดชนิดข้อมูลให้ parameter
const namePrint = 'A'
function onPrint(p:string){//void คือไม่มีการกำหนดค่าชนิดข้อมูลเป็นรูปแบบใดรูปแบบหนึ่งหรือมากกว่า 1 ก็ได้
  // onPrint(p:string) คือการกำหนด parameter p ให้รับค่าเป็น string ได้เท่านั้น

  //console.log('name : ' + p);
  console.log(`name: ${p}`);
  
}
//onPrint(namePrint)



//typescript ตัวอย่างการกำหนดค่าที่ต้องการที่จะรับ
const E = 'X'
const F = 'Y'
const X = 'M'
function getXandY(p:'X'|'Y'){
  // function นี้จะรับค่าที่เป็น X หรือ Y เท่านั้นแต่ถ้าใส่ค่าอื่นไปมันก็ run ได้แต่มันจะแจ้งเตือน
  console.log('Print : ',p);
}
//getXandY(X)



//typescript ตัวอย่างการกำหนดชนิดข้อมูลที่จะออกของ function และ void
const onSum= (a:number,b:number) => {//แบบปกติไม่ได้กำหนด void จะเป็นตัวบอกว่า function นี้จะไม่การ return ค่าออกมา
  console.log(`a + b = ${a+b}`);
}
//console.log(typeof onSum(1,1));; //ค่าที่ได้จะเป็น undefined

const onSum2= (a:number,b:number):string => {//แบบกำหนดชนิดข้อมูลที่จะออกมาเป็น string
  let c = a+b
  console.log(`a + b = ${c}`);
  return `${c}` //เงือนไขคือต้อง return ค่าที่จะต้องการให้เป็น string
  
}
//console.log(typeof onSum2(1,1)); //ค่าที่ได้จะเป็น string



//typescript ตัวอย่างการใช้งาน switch

function onFormat(p:string|number){
  switch (typeof p) {
    case "string":
      return console.log(p.charAt(0)); //แสดงตัวอักษรตำแหน่งที่ 0
    case "number":
      return console.log(p.toFixed(2)); //เพิ่มทศนิยม 2 ตำแหน่ง
    case"undefined":
      return console.log("Please input")
    
    default:
      return p
      //break
  }
}
//onFormat('18')

//let x = 10, y = 5;
function XplusY(x:number,y:number){
  const z = x-y
  switch (z) {
    case 0:
        console.log("Result: 0");
        break;
    case 5:
        console.log("Result: 5");
        break;
    case 10:
        console.log("Result: 10");
        break;
  }
}
//XplusY(5,5)



//การใช้ as type
  //แบบปกติที่ไม่ได้กำหนด ชนิดข้อมูล
const G = " 18 " //ถ้าไม่ได้กำหนดชนิดข้อมูล ตัวแปร G จะมีค่าชนิดข้อมูล " 18 "
//ตัวอย่างเมื่อใส่ใน function check string ตัว function จะมองตัวแปร G เป็น string จึงสามารถเข้าเงื่อนไงของ function ได้ *ข้อเสียมันจะยากในการเปลี่ยนชนิดข้อมูลเป็นแบบอื่น 

  //การเปลี่ยนชนิดข้อมูล ตัวที่ไม่ได้กำหนดชนิดข้อมูล
  const G1 = G as unknown as number //เมื่อ G1 ต้องการค่า G(ชนิดข้อมูลเป็น " have a Good day" *ไม่ใช่ string) ที่เป็นชนิดข้อมูลเป็น number
  //ทำการเปลี่ยนค่าตัวแปร G ที่ไม่ได้กำหนดชนิดข้อมูลเป็น ชนิดข้อมูล unknown และเปลี่ยนเป็น number
//console.log(G1);


  //แบบกำหนดชนิดข้อมูล
const H = " 19 " as string // H ทำการกำหนดชนิดข้อมูลเป็น string ถ้าไม่กำหนดชนิดข้อมูล " 19 "

  //การเปลี่ยนชนิดข้อมูล  ตัวที่กำหนดชนิดข้อมูลไว้แล้ว
  const H1 = +H
//console.log(H1);



//Array
const myArray1:Array<number> = [1,2,3] //การกำหนดชนิดข้อมูลในรูปแบบ Array<ชนิดข้อมูลที่ต้องการที่ต้องการใช้กำตัวแปรนี้>

const myArray2:Array<string|null> = ['good','night'] //การกำหนดชนิดข้อมูลในรูปแบบ Array<สามารถกำหนดการรับชนิดข้อมูลได้มากกว่า 1 ชนิด>

const myArray3:boolean[] = [false,true] //การกำหนดชนิดข้อมูลในรูปแบบย่อของ :Array<boolean>

const myArray4:(string|null)[] = [null] //การกำหนดชนิดข้อมูลในรูปแบบย่อที่สามารถกำหนดการรับชนิดข้อมูลได้มากกว่า 1 ชนิดของ :Array<string|null>



//tuple type Array คือการประกาศชนิดข้อมูลอะไรควรอยู่ตำแหน่งไหน
const myArray5:[number,string,boolean] = [1,'2',false]



//Enum
enum Choice{ //enum จะกำหนดตัวแปร Choice ให้แสดงชื่อข้อมูลที่อยู่ในตัวมัน ให้สามารถเลือกใช้ได้ง่าย
  A = 'have a good day',
  B = 'have a good time',
  C = 'have a nice day'
}
function onCheck(p:Choice){
  switch(p){
    case Choice.A:
      return console.log(Choice.A);
    case Choice.B:
      return console.log(Choice.B);
    case Choice.C:
      return console.log(Choice.C);
      
    default:
      return p
  }
}
//onCheck(Choice.B)



//การประกาศตัวแปร alias

  //ปกติ
  const company:string = 'companyA'
  
  //การประกาศตัวแปร alias
  const role:"admin"|"user"|"develop" = 'admin'



//Function overloading คือการนำ Function ตัวเดียวกันมาต่อกันและทำงานร่วมกัน

const isNumber = (p:unknown):p is number =>{ //ส่วนนี้เรียกว่าการทำ type guard
  //(p:unknown):p is number คือ ค่า p:unknown มาลองรับ และ ถ้า p เป็น number ให้ return
  return typeof p === "number" //typeof(ชนิดข้อมูล) p === "number"
}

function onCheckType(a:number,b:number):number
function onCheckType(a:string,b:number):number
function onCheckType(a:unknown,b:number){
  if(isNumber(a)) return a + b
  if(typeof a === 'string') return +a + b //เปลี่ยนค่า a ให้เป็น number
  if(typeof a === 'boolean') return 'boolean'
  throw new Error('Error') //throw(โยนค่า)
}
//console.log(onCheckType(1,2));  //number
//console.log(onCheckType('2',2)); //string
//console.log(onCheckType(true,2)); //boolean
//console.log(onCheckType(,2)); //Error