//Interface

  //object ปกติที่ใช้
  const People:{//การกำหนดชนิดข้อมูลใน object
    name:string,
    age:number,
    birthDate:string,
    tel:string,
    status:"single"|"marry",
    email:string,
  } = {
    name:'A',
    age: 18,
    birthDate: '2000-01-01',
    tel:'089xxxxxx',
    status:"single",
    email:'xxxxxx',
  }


//ใช้ Interface
  interface peopleActive{//การใช้งาน interface รูปแบบจะคล้ายๆกับ object และ type มีความสามารถพิเศษของแต่ละตัวต่างกัน
    onGetName:()=>string  //onGetName รับเป็น function ที่ค่าออกมาเป็น string
    onGetAge:()=>number  //onGetAge รับเป็น function ที่ค่าออกมาเป็น number
  }



//Interface extends  *Interface สามารถ extends component แม่มาใช้งานได้มากว่า 1ตัว /*extends inter1, inter2, inter3
  interface people extends peopleActive{//extends peopleActive คือการนำความสามารถที่มีอยู่ในตัว peopleActive ที่เป็น component แม่มาใช้งาน
    name:string,
    age:number,
    readonly birthDate:string, //readonly กำหนดให้ค่า birthDate ไม่สามารถแก้ไขได้อ่านได้อย่างเดียว
    tel?:string,  //ตัวแปร? กำหนดให้ tel จะรับหรือไม่รับข้อมูลก็ได้เหมือน string|null
    status:"single"|"marry",  //ทำการกำหนดให้รับได้เฉพาะ "single"หรือ"marry" เท่านั้น
    email:string,
  }

  //การรับตัวแปรที่เป็น interface มาใช้งาน
  const man1:people = {
    name:'A',
    age: 18,
    birthDate: '2000-01-01',
    tel:'089xxxxxx',
    status:"single",
    email:'xxxxxx',
    onGetName:()=>man1.name , //ต้องใส่ข้อมูลของ Interface component แม่ที่ extends มาด้วย
    onGetAge:()=>man1.age //ต้องใส่ข้อมูลของ Interface component แม่ที่ extends มาด้วย
  }
  //console.log(man1.onGetAge());

  const man2:Partial<people> = {//Partial<ตัวแปร> คือการกำหนดว่าจะใส่หรือไม่ใส่ข้อมูลที่อยู่ในตัวแปรก็ได้เหมือนใส่ ? ให้กับข้อมูลที่อยู่ใน people ทุกตัว
    name:'B',
    age: 18
  }


//Interface การกำหนดชนิดข้อมูล ชนิดเดียวกันทั้งหมด
  interface sales {
    [index:number]:string //index = parameter *สามารถตั้งการรับชนิดข้อมูล [index:string|number]:number|string ได้แต่จะเป็นแบบเดียวเหมือนกันทั้งหมด
  }

  //การรับตัวแปรที่เป็น interface
  const crisps:sales = {
    1:'a',
    2:'b'
  }

  const FrenchFries:sales = ["a","b","c"]



//การประกาศ interface แบบ alias

  //ปกติ
  const company:string = 'companyA'

  //การประกาศ interface แบบ alias
  interface Role{
    role:"admin"|"user"|"develop"
  }

  //interface แบบ alias ไปใช้งานต่อ
  const MyRole:Role ={
    role:'admin'
  }