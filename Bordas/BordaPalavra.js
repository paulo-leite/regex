const text1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial' // SEM ACENTOS

console.log(text1.match(/\bdia\w+/gi)) // Palavras que começam com dia (como esta com +'um ou mais' não veio a palavra dia) para incluir trocar por *'zero ou mais'.
console.log(text1.match(/\w+dia\b/gi)) // Palavras que termiam com dia (como esta com +'um ou mais' não veio a palavra dia) para incluir trocar por *'zero ou mais'.
console.log(text1.match(/\w+dia\w+/gi)) // Palavras que possuem dia no meio.
console.log(text1.match(/\bdia\b/gi)) // Somente a plavra dia (dia esta entre 2 bordas).

// Borda é um não \w que é [^A-Za-z0-9_]... Temos problemas com acentos! Pois, caracteres acentuados são considerados bordas.

const text2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial' // COM ACENTOS
console.log(text2.match(/\bdia\b/gi)) // Retornara 4 dias, pois os caracteres acentuados contam como borda.
console.log(text2.match(/(\S*)?dia(\S*)?/gi)) // Palavra dia entre grupos não espaços 0 ou mais (\S*) opcionais (?). A vírgula também é capturada
console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)/gi)) // Palavra dia entre grupos com conjunto (com caracteres \w + acentos) de 0 a muitos '*' e opcional '?'
