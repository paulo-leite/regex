const text = '1,2,3,5,CasA de Juizo'
const regexVirgula = /,/

console.log(text.split(regexVirgula))
console.log(text.match(regexVirgula))

console.log(text.match(/,/g))
console.log(text.match(/A/g))
console.log(text.match(/A/gi))
console.log(text.match(/2/g))
console.log(text.match(/de J/))
