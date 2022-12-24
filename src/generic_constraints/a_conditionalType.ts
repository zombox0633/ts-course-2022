/**
 * Lesson Condition type
 * 
 *  NOTE: T extends U ? X : Y
 * ตัวแปร T ทำการขอข้อมูลจาก component แม่ที่เป็น U ถ้ามีส่งค่า X ไม่มีส่งค่า Y
 */


/**
 * TODO: Example 1
 */
type NumOrString = string[] | number[] | boolean | undefined

type ArrayOnly<T> = T extends unknown[] ? T : never // ArrayOnly< T คือ type parameter>
//T extends unknown[] ? T : never คือ T ทำการขอข้อมูลจาก component แม่ ถ้ามีส่งค่า T ไป ไม่มีส่งค่า never 

type Dummy = ArrayOnly<NumOrString> // ArrayOnly< การนำข้อมูล NumOrString มาใช้ > T คือ ตัวแปรที่นิยามขึ้นเพื่อใช้แทน



/**
 * TODO: Example 2
 */

const person = {
  name: "Somchai",
  age: 24,
  getName(){
    return this.name
  },
  getAge(){
    return this.age
  }
}

type PersonA = typeof person

type PersonFunctionKeys<T> = {//PersonFunctionKeys<T คือ type parameter T คือ ตัวแปรที่นิยามขึ้นเพื่อใช้แทน
  [k in keyof T]: T[k] extends Function? k : never
  //[k in keyof T]  คือ [k(key) ที่เป็นชื่อตัวแปรใน T(type parameter ,const หรือ  interface ที่นิยามขึ้นเพื่ออ้างถึง)]
  //T[k] extends Function? k : never  คือ ทำการดึงข้อมูลจาก ตัวแปร T ที่มี [k] เป็นชนิดข้อมูลที่ k เป็น Function? ถ้ามีส่ง k ไม่มีส่ง never
}

type PersonFunctionKeysResult = PersonFunctionKeys<PersonA>