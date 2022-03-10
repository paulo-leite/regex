const text = 'João é calmo, mas no trânsito fica nervoso.'

console.log(text.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/gi))  // Uma palavra que tem uma vírgula na frente
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi))  // Uma palavra que tem um ponto na frente
