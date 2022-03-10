// Para definir um quantificador usamos {}

const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

console.log(text.match(/\d{1,2}/g)) // Números que tenham 1 ou 2 dígitos um do lado do outro (não precisa ter espaços entre eles)
console.log(text.match(/[0-9]{3}/g)) // Números com 3 dígitos
console.log(text.match(/\d{1,}/g)) // Números com 1 ou mais dígitos

console.log(text.match(/\w{7}/g)) // Grupos de caracteres(não acentuadas) que contém 7 digitos
console.log(text.match(/[\wõ]{7,}/g)) // Grupos de caracteres(+ õ) que contém 7 digitos ou mais

