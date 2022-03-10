const text = `
Os e-mails dos convidados são:
- fulano10@email.com.br
- chico.cg@gmail.com
- gorverno123@email.gov.br
- paulo.sistemas@live.com
- paulo.leite@virtus.ufcg.edu.br
`

console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2,3})?(\.\w{2})?/g))
