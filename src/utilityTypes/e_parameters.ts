/**
 * Lesson : Parameters<T>
 * Parameters<Fn> คือการนำ parameter ที่ function มาใช้งานต่อ
 */

type Person = {
  name: string
  age: number
}

type PersonA = Person

// NOTE: type MyGetParameters
// * type myGetReturnType = [person:Person, key: 'name' | 'age]

function get(person:Person, key: keyof Person){
  
  return person[key]

}


type Fn = typeof get



type MyGetParameters<T extends (...args:any) => any > = T extends (
  ...args:infer A) => any ? A :never




//
type myGetReturnType = Parameters<Fn>
