// A maioria doa Metacaracteres dentro de um Conjunto se
// comportam como literais (sem necedidade de icluir o scape \)

const text = '.$+*?-'
console.log(text.match(/[$+.*]/g))
console.log(text.match(/[$-?]/g))  // Isso é um intervalo (range) -
console.log(text.match(/[$\-?]/g)) // Não é um intervalo (o scape \ esta transformando o - em literal
console.log(text.match(/[-?]/g)) // Não é intervalo, seria apenas 2 elementos

// Alguns caractes em algumas situações precisam do scape \ para serem compreendidos como literais: - [ ] ^

