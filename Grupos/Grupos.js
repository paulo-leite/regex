// Grupos são definidos entre ()

const text = 'O José Simão é muito engraçado... hehehehehe'
console.log(text.match(/(he)/g)) // Sem o quantificador pega separados
console.log(text.match(/(he)+/g)) // Com o quantificador + pega todos juntos (um ou mais)

const text2 = 'http://www.site.com.br www.printcut.com google.com.br'
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))


// OBS: Grupos não fucionam dentro de um conjunto... os parênteses são tratados como caracteres normais:
const text3 = 'Pedrio (filho do Pedro Silva) é doutor em ABCabc!'
console.log(text3.match(/[(abc)]/gi))

// Já ao contrário é permitido termos conjuntos dentro dos Grupos:
console.log(text3.match(/([abc])/gi))

// OBS 2 : Evitar usar grupos desnecessários:
console.log(text3.match(/(abc)/gi))
console.log(text3.match(/abc/gi))

