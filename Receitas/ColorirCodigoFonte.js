const applyColor = (text, regex, color) =>
    text.replace(regex, `<span style="color: #${color}"><b>$1</b></span>`)

const files = require('./files') // Importando o arquivo files
const text = files.read('codigoFonte.html') // Lendo o arquivo html

const codeRegex = /<code>[\s\S]*<\/code>/i // Extrair apenas o código que está dentro de tag <code>
let code = text.match(codeRegex)[0]

// Strings...
code = applyColor(code, /('.*')/g, 'ce9178')

// Palavras reservadas...
code = applyColor(code, /\b(package|public|class|static|if|else\b)/g, 'd857cf')

// Tipos
code = applyColor(code, /\b(void|int)\b/g, '1385e2')

// Comentário de múltiplas linhas...
code = applyColor(code, /(\/\*[\s\S]*\*\/)/g, '267703')

// Comentáro de uma linha...
code = applyColor(code, /(\/\/.*?\n)/g, '267703')


const finalContent = text.replace(codeRegex, code)
files.write('codigoFonte.html', finalContent)
