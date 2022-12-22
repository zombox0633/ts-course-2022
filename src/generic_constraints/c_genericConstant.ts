/**
 * Lesson Generic Constraints
 */

function marginal<U extends object, V extends object>(obj1:U,obj2:V){
  //marginal<U extends object, V extends object> คือ parameter U ทำการดึงข้อมูลจาก Component แม่ที่เป็น object หรือถ้าตามนี้คือการดึงข้อมูลจากตัวที่ใส่ใน parameter function/ V ทำเหมือน U
  //(obj1:U,obj2:V) คือ parameter function obj1 รับ U ที่เป็น object /  V ทำเหมือน U

  return {...obj1,...obj2} //ทำการคัดลอก object obj1 และ obj2 ทำการรวมกันเป็น object ใหม่ของ function marginal

}

//นำไปใช้งานกับตัวแปร
const result = marginal({name:'A'},{age:18})
console.log(result);//{ name: 'A', age: 18 }
