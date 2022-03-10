const text = '1,2,3,4,5,a.b c ! ${abc}FF_'

console.log(text.match(/\d/g)) // Números [0-9]
console.log(text.match(/\D/g)) // Não números [^0-9]

console.log(text.match(/\w/g)) // Caracteres não acentuados [a-ZA-Z0-9_]
console.log(text.match(/\W/g)) // Não Caracteres não acentuados [^a-ZA-Z0-9_]

console.log(text.match(/\s/g)) // Espaço ' '(espaço em branco), \t (tab), \n (quebra de linha), \r (retorno de carro), \f (form feed)
console.log(text.match(/\S/g)) // Não espaço [^ \t\n\r\f]
