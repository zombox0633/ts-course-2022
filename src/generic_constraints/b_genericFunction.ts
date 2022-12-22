/**
 * Lesson : Generic Functions.
 * 
 * ex
 * 
 * function lastNum<T>(arr: T[], count: number) {
  return arr.slice(arr.length - count)
  }
 */

const lastNum = <T>(arr:T[],count:number) => {
  //<T> คือ lastNum<T> type parameter / T คือ ตัวแปรที่นิยามขึ้นเพื่อใช้แทน
  //(arr:T[],count:number) คือ (parameter arr : ชนิดข้อมูลอะไรก็ได้ตามที่ lastNum กำหนดแต่จะเป็นในรูปแบบ Array ,count:number)

  return arr.slice(arr.length - count)
  //parameter arr.(arr.length(เลขตำแหน่งของ Array) - count)

  //slice(start?: number | undefined, end?: number | undefined)
}

//number[]
//console.log(lastNum([1, 2, 3, 4, 5, 6, 7], 3));
//[ 5, 6, 7 ] ทำการลบจำนวนตำแหน่งโดยใช้ count


//string[]
//console.log(lastNum(["🍕", "🍉", "🥝", "🍧", "🥩"], 3));
