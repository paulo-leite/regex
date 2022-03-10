// Frases que começam e terminam com a mesma letra

const text = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Bob
`
// Quebras de linhas
console.log(text.match(/\n/g))
// Usando Grupo e retrovisor...
console.log(text.match(/^(\w).+\1$/gi))  // Erro por conta do . nao pegar o /n
console.log(text.match(/^(\w).+\1$/gim))  // OK, usando a flag m (multiline)


