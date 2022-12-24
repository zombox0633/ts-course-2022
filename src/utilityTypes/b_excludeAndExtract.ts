/**
 * Lesson Exclude and Extract
 */

/**
 * @description Exclude. /*ไม่รวม หรือเอาตัวที่แตกต่าง ตัวที่เหมือนไม่เอา
 * DESC : Exclude => <A | B> => Check B<member> is not in A
 * DESC : !(B<member> in A<member>)
 * NOTE: type MyExclude<T,U> = T extends U ? never : T
 */

type A = 'name' | 'age' | 'gender'
type B = 'name' | 'age'

type MyExclude<T,U> = T extends U ? never : T
//T extends U ? never : T  คือ T ทำการดึงค่าที่เหมือน U มาถ้าใช่ให้ส่งค่า never ถ้าไม่ใช่ให้ส่งค่า T
const C:MyExclude<A,B> = 'gender' //เงือนไขการใช้คือ A ต้องเป็นตัวที่มีค่าไม่เหมือน B ถ้าไม่ตามเงือนไขก็แตก
console.log(C);

//แบบใช้คำสั่ง Exclude<,>
type DummyExclude = Exclude<A,B>



/**
 * @description Extract. เอาตัวที่เหมือน
 * DESC : Extract => <A | B> => Check B<member> in A
 * DESC : B<member> in A<member>
 * NOTE: type MyExclude<T,U> = T extends U ? T : never
 */

type MyExtract<T,U> = T extends U ? T : never
// T extends U ? T : never คือ T ทำการดึงค่าที่เหมือน U มาถ้าใช่ให้ส่งค่า T ถ้าไม่ใช่ให้ส่งค่า never
const D:MyExtract<A,B> = 'age'
//console.log(D); /*answer age และ name

//แบบใช้คำสั่ง Extract<,>
type DummyExtract = Extract<A,B>