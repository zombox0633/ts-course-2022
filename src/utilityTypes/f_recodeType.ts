/**
 * Lesson Recode<T>
 * NOTE: return Object
 * - Key an string | number | symbol.
 */

// DESC: type MyPerson = MyRecode<'name' | 'age', string>


type KeyOfPerson = "name" | "age" | "address"



type PatternPerson<K extends string | number | symbol, T> = {[P in K]:T}
//<K extends string | number | symbol, T> คือ K ทำการดึงข้อมูลที่เป็น string | number | symbol และ T ที่เป็นตัวแปรที่เพิ่มเข้ามา
//{[P in K]:T} คือ ภายใน object ของ K{[มี P ที่อยู่ใน K] คือ T }

//การนำไปใช้งานกับตัวแปร
const PersonA:PatternPerson<KeyOfPerson|"tel" , string> = {
  //PatternPerson<KeyOfPerson|"tel" , string>  คือ <type ที่จะนำข้อมูลใส่ | "ข้อมูลที่จะใส่เพิ่ม" , ชนิดข้อมูลที่จะใส่เพิ่ม>

  name:'A',
  age:'18',
  address:'123',
  tel:'123'
}



//การใช้งาน Recode<type ที่จะนำข้อมูลใส่ | "ข้อมูลที่จะใส่เพิ่ม" , ชนิดข้อมูลที่จะใส่เพิ่ม>
type MyPatternPerson = PatternPerson<KeyOfPerson|'tel',string>

//การนำไปใช้งานกับตัวแปร
const PersonB:MyPatternPerson = {
  name:'A',
  age:'18',
  address:'123',
  tel:'123'
}