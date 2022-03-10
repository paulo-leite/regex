//  * -> zero ou mais (opcional)

const text = 'De longe eu avistei o fogo e uma pessoa grintanto: FOGOOOOOOO!'
const text2 = 'There is a big fog in NYC'

const regex = /fogo*/gi  // Pode ter zero ou mais instância(s) do último "o", o que está colado no *
console.log(text.match(regex))
console.log(text2.match(regex))
