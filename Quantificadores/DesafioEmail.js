const text = `
Os e-mails dos convidados são:
- fulano@email.com.br
- chico.cg@gmail.com
- gorverno@email.gov.br
- paulo.sistemas@live.com
`

const regexEmail = /[\w.]+@\w+\.\w{3}.?\w{0,2}/g

console.log(text.match(regexEmail))

// no futuro... conceito de GRUPOS ()

const regexEmail2 = /[\w.]+@\w+\.\w{3}(\.\w{2})?/g

console.log(text.match(regexEmail2))

