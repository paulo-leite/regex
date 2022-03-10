// No início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ Caracteres
// + Símbolos, + Pontuação, A-Z, a-z, 0-9]

// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt/

const text = 'aʬ௵d'
console.log(text.match(/\u02AC|\u0BF5/g))
