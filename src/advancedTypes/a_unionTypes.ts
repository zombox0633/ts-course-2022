//union Types

type VerticalAlignment = 'top'|'bottom'
type HorizontalAlignment = 'left'|'right'

//การนำค่ามาร่วมกันในการใช้งาน
type Alignment = `${VerticalAlignment} ${HorizontalAlignment}`
//การใช้งาน type ที่ทำการ union กัน
const Z:Alignment = 'bottom left'
//console.log(Z);


type A = string
type B = number

//การนำค่ามาร่วมกันในการใช้งาน
type C = A&B //A กับ B มาร่วมกัน
//การใช้งาน type ที่ทำการ union กัน



