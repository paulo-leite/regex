// Os conjuntos negados são representados pelo símbolo ^ no início da expressão (OBS: dentro de um conjunto [^ ])

const text = '1,2,3,4,5,a.b c ! ${abc}FF_'

console.log(text.match(/\D/g))
console.log(text.match(/[^0-9]/g))
console.log(text.match(/[^\d]/g))
console.log(text.match(/[^\d!\s{}_]/g))

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(text2.match(/[^!-/:-@\s]/g)) // 2 intervalos (primeiro !-/ e segundo :-@)


