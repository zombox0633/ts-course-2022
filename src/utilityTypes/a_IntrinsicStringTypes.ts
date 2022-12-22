//IntrinsicStringTypes

type Character1 = Uppercase<'hello world'>
const C1:Character1 = 'HELLO WORLD'

type Character2 = Lowercase<'HELLO WORLD'>
const C2:Character2 = 'hello world'

type Character3 = Capitalize<'hello world'>
const C3:Character3 = 'Hello world'

type Character4 = Uncapitalize<'Hello world'>
const C4:Character4 = 'hello world'