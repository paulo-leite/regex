const text = `
Lista telefônica:
- (11) 98548-1254
- (23)92765-1234
- (76) 95674-7654
-91233-6543
- (83)3234-9999
- 5430-8877
`

const regexTelefone = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(text.match(regexTelefone))

