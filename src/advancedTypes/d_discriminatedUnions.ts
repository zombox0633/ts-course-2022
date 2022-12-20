//discriminated Unions

//การทำงานจะคล้ายๆกับ type guard  บรรทัดที่ 94
interface Triangle{
  base:number
  height:number
}
interface Rectangle{
  width:number
  length:number
}
interface Circle{
  radius:number
}

type Shape = Triangle | Rectangle | Circle //คือการเลือกตามเงื่อนไขใดเงื่อนไข 1 ของ Shape


const ShapeA:Shape ={
  base:18,
  height:10
}

function areaCalculator(p:Shape){
  if('width' in p){
    let A = p.width*p.length
    return console.log(A);
  }
  if('base' in p){
    let B = 1/2*(p.base*p.height)
    return console.log(B);
  }
  if('radius' in p){
    return console.log('πr2');
  }
  else{
    return console.log('error');
  }
}
//areaCalculator(ShapeA)