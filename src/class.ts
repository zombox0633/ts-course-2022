//class

//การสร้าง class
class Test{
  id!:number; //! คือเครื่องหมายบังคับต้องใส่ของมูลนี้ด้วย *เครื่องหมาย ! มีเฉพาะใน class
  readonly name:string; //readonly อ่านได้เท่านั้นแก้ไขไม่ได้
  
  constructor(id:number,name:string){ 
    //constructor คือตัวกำหนดการสร้างของ class และทำการกำหนดค่าที่ตั้งขึ้น *readonly จะสามารถแก้ไขค่าได้ที้นี้เท่านั้นเฉพาะใน class
    this.id = id 
    this.name = name
  }
}

//การทำ class ไปใช้งานต่อ
const Test1 = new Test(1,'product01');//การจะใช้งานตัวแปรที่ถูกสร้างด้วย class ต้องขึ้นต้นด้วย new และ ตัวแปรที่ถูกสร้างด้วย class
//console.log(Test1); //typeof Test1 จะอยู่ในรูปแบบ object

  //การแก้ไขข้อมูลตัวแปรที่ถูกสร้างด้วย class
Test1.id = 2
//Test1.name = 'name' //จะไม่สามารถแก้ไขได้เพราะติด readonly อ่านได้เท่านั้นแก้ไขไม่ได้
//console.log(Test1);



//การต่อ class แม่ โดยใช้ extends
class Test2 extends Test {//การ extends ของ class จะสามารถ extends class แม่ได้แค่ class เดียว *เฉพาะของ class
  
  //การประกาศตัวแปรแบบ private, public และ protected
  private component:string; //private คุณสมบัติคือ class อื่นไม่สามารถใช้ได้
  protected feature:string; //protected คุณสมบัติคือ ใช้ได้เพราะเส้นสายมันเท่านั้น เช่น class ลูก
  description:string; //public จะใส่หรือไม่ใส่ด้านหน้าชือข้อมูลก็ได้ คุณสมบัติคือ ใช้ได้ทุก class

  constructor(
    //id กับ name ไม่ต้องใส่ก็ได้เพราะมันกำหนดค่าใน constructor{super()}
    id:number, //การสร้าง constructor จะต้องสร้างมารองรับตัวแปรที่ class แม่กำหนดด้วย
    name:string, //การสร้าง constructor จะต้องสร้างมารองรับตัวแปรที่ class แม่กำหนดด้วย
    component:string,
    feature:string,
    description:string
    ){
      super(2,'product02') //การใช้งาน class แม่จะต้องใช้คำสั่ง super(ค่าที่ต้องการ *ไม่ใช่ชนิดข้อมูล)
      //การเรียกใช้งาน class แม่ต้องทำตามเงื่อนไขของ class แม่ที่กำหนดไว้
      this.component = component
      this.feature = feature
      this.description = description
    }

    static CheckId(){ //การสร้างแบบ static จะทำให้ใช้งาน function ได้เลยโดยไม่ต้อง new และ ตัวแปรที่ถูกสร้างด้วย class
      console.log('1');
    }
}

  //การใช้งาน static function ที่อยู่ใน class
  //Test2.CheckId()

  //การทำ class ไปใช้งานต่อ
  const TestA = new Test2(
    4,
    'productA',
    'component',
    'feature',
    'description')
    //console.log(TestA); 
    //แม้จะแก้ไขตัว id และ name ใน TestA มันจะไม่เป็นเพราะมันถูกกำหนดใน constructor{super()} แล้ว


  
//การต่อ class แม่ เป็น interface โดยใช้ implements

    //implements สารถใช้ได้กับ interface ได้เท่านั้น, implements จะสามารถรับได้มากว่า 1 ตัว 

    interface productA{
      code:number
    }

    class productB implements productA{
      code:number
      name:string
      description:string
      constructor(
        code:number,
        name:string,
        description:string){  
          this.code = code,
          this.name = name,
          this.description = description
      }
    }

const productB01 = new productB(1,'test','test')



//abstract class
    //abstract class ถูกสร้างมาใช้เฉพาะการ extends class เท่านั้นไม่สามารถสร้างตัวแปรมารับค่าต่อจาก abstract class ได้

    abstract class productC{
      t1:number
      constructor(t1:number){
        this.t1 = t1
      }
    }