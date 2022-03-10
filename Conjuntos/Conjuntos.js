// Para definir uma classe (ou conjunto) de caracteres usamos []

const text = '1,2,3,4,5,a.b c ! ${abc}FF'
const regexPares = /[02468]/g
console.log(text.match(regexPares))

const text2  = 'João não vai passear na moto'
const regexComESemAcento = /n[aã]/g
console.log(text2.match(regexComESemAcento))


const numeros = 'asdhui12312asd123uias12312hbdua'
console.log(numeros.replace(/\D+/g, ''))
