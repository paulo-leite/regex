const text = `Romário era um excelente jogador,
mas hoje é um político questionador`

console.log(text.match(/r/gi))
console.log(text.match(/^r/gi))  // ^ (fora de um conjunto[], que significaria negado) Significa no início da Linha/String
console.log(text.match(/r$/gi))  // $ Significa no fim da Linha/String

console.log(text.match(/^r.*r$/gi))  // Começa e termina com r... Mas temos o problema do Dotall! (quebra de linha /n) Solução no arquivo Dotall.
