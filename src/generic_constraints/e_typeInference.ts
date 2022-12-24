/**
 * Lesson: Type Inference
 */

type Person = string[]



/**
 * TODO: Example 1
 */

type Unpacked<T> = T extends (infer A)[] ? A : never
//Unpacked<T> คือ type parameter * T คือ ตัวแปรที่นิยามขึ้นเพื่อใช้แทน
//T extends คือ ทำการดึงข้อมูลจาก T ที่ข้อมูลเป็น A หรือถ้าตามนี้คือการดึงข้อมูลจากตัวที่ใส่ใน <T ที่กำหนด A>
//(infer A)[] ? A :never คือ (infer A) คือน่าจะเอาแค่ A ไม่เอา Array ถ้าเป็นจริงแสดง A ถ้าไม่แสดง never

//นำไปใช้งาน
type stringAndNumberUnpacked = Unpacked<string[] | number[]> // string | number
//ตัว type Unpacked ตัด Array ของชนิดข้อมูลออก

type stringUnpacked = Unpacked<string>
//ในกรณีที่ค่าที่ใส่ไม่ใช่ ชนิดข้อมูลที่เป็น Array จะทำให้ ชนิดข้อมูลเป็น never