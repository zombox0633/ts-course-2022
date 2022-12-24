/**
 * Lesson : ReturnType.
 */

type Person = {
  name: string
  age: number
}


// * type myGetReturnType = string | number
// type myGetReturnType = MyGetReturnType<Fn>;

function get(person: Person, key: keyof Person) {
  return person[key]
}

type Fn = typeof get


type myGetReturnType = ReturnType<Fn>
//ReturnType ทำการแสดงชนิดข้อมูลใน function