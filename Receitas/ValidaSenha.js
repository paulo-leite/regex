// Validação da senha: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial, mínimo 6 e máximo 20 caracteres

const text = `
abcd
123456
cod3r
QUASE123@
#OpA1
#essaSenhaEGrande123456

#Opa01&
Foi$123
Test02@
`

console.log(text.match(/^.{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm)) // Utilizando positive lookahead
console.log(text.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
