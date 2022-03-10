//  ? -> zero ou um (opcional)

const text = 'De longe eu avistei o fogo e uma pessoa grintanto: FOGOOOOOOO!'
const text2 = 'There is a big fog in NYC'

const regex = /fogo?/gi  // Pode ter zero ou uma instância do último "o", o que está colado na ?
console.log(text.match(regex))
console.log(text2.match(regex))


