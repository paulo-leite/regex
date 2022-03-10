const text = `
CPF dos aprovados:
- 604.304.678-12
- 406.126.096-45
- 206.092.567-77
- 126.345.324-00
`

const regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(text.match(regexCPF))

