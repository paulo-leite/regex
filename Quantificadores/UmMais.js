//  + -> um ou mais

const text = 'De longe eu avistei o fogo e uma pessoa grintanto: FOGOOOOOOO!'
const text2 = 'There is a big fog in NYC'

const regex = /fogo+/gi  // Deve ter uma ou mais instância(s) do último "o", o que está colado no +
console.log(text.match(regex))
console.log(text2.match(regex))

const text3 = '0123456789abc123ABCDEF888'
console.log(text3.match(/[0-9]/g))
console.log(text3.match(/[0-9]+/g)) // Pega trecho do texto que tenha digitos de 0-9 um ou mais digitos (Quantificador Guloso)
