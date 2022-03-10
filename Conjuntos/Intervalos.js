const text = '1,2,3,4,5,a.b c ! ${abc}FF'
console.log(text.match(/[a-z]/g))
console.log(text.match(/[b-d]/g))
console.log(text.match(/[2-4]/g))
console.log(text.match(/[A-Z1-3]/gi))
