const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g)) // Não define o range pois está fora de um conjuto
console.log(text.match(/[A-z]/g)) // Intervalos usam ordem da tabela UNICODE (Entre os maíusculos e começar
                                          // os minúsculos existem outros caracteres) como exemplo o [ e ]

// Os intervalos devem respeitar a tabela UNICODE
// console.log(text.match(/[a-Z]/g))
// console.log(text.match(/[4-1]/g))
