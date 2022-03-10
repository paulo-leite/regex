const text = `Romário era um excelente jogador,
mas hoje é um político questionador`

console.log(text.match(/^r.*r$/gi))  // Problema do Dotall!
console.log(text.match(/^r[\s\S]*r$/gi))  // Conjunto com todos os espaços e os não espaços
