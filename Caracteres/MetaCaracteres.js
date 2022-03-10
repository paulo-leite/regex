// . ? * + - ^ $ | [ ] { } ( ) / :

// O escape \ é usado para determinar como um caractere subsequente será interpretado. (Literal ou Metacaractere)

const text = '1,2,3,5,CasA! de Juizo${}'
const regexPonto = /\./
console.log(text.split(regexPonto))

const regexSimbolos = /,|\.|\$|!| /g
console.log(text.split(regexSimbolos))
console.log(text.match(regexSimbolos))

// ponto . é um coringa, válido para uma posição

const text2 = '1,2,3,4,5,6'
console.log(text2.match(/1.2/g))
console.log(text2.match(/1..2/g))
console.log(text2.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))
