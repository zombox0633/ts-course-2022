/**
 * Lesson NonNullable
 */

/**
 * @description NonNullable<T> เอา null | undefined ออก
 * DESC: type MyNonNullable<T> = T extends null | undefined ? never : T
 */

type A = string | number | boolean | undefined | null
type B = undefined | null

type NonNullable<T> = T extends null | undefined ? never : T
// T extends null | undefined ? never : T  คือ T ที่มีค่าเป็น null | undefined ถ้าใช่ให้ส่ง never ถ้าไม่ใช่ให้ส่ง T


type C = NonNullable<A>
//แต่ในกรณี type A ที่มีการรับค่าชนิดข้อมูลหลาย NonNullable<T> จึงทำการตัด undefined | null ออกและใช้ค่าที่เหลือ
//แตกต่างกับ type B ที่มีแต่ค่า undefined | null NonNullable<T> จึงส่งเป็น never ตามเงือนไข

//แบบใช้คำสั่ง NonNullable<>
type MyNonNullable = NonNullable<A>


