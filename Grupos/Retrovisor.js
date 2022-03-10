// Sepre que griamos grupos o valor desse grupo fica* armarzenado e com isso possamos acessá-los com os Retrovisores.
// Retrovisores refereciam os grupos a partir da ordem que foram criados: EX:
// - \1 : referencia o primeiro grupo, \2 : referencia o segundo grupo ...
// Para utilizar no replace no lugar de \ usamos o $: EX:
// - $1 : referencia o primeiro grupo, $2 : referencia o segundo grupo ...

const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(text1.match(/<(\w+)>.*<\/\1>/g))

const text2 = 'Lentamente é mente muito lenta.'
console.log(text2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) //* ?: faz com que o grupo não seja armazenado (consequentimente o primeiro grupo será o (mente))

console.log(text2.match(/(lenta)(mente)/gi))
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2'))
console.log(text2.replace(/(lenta)(mente)/gi, 'ABC$2 qualquer coisa'))
