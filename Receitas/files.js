const fs = require('fs')

const read = fileName =>
    fs.readFileSync(`${__dirname}/originals/${fileName}`, { encoding: 'utf8' })

const write = (fileName, contents) => {
    const dirName = `${__dirname}/changed`
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName)
    }

    fs.writeFileSync(`${dirName}/${fileName}`, contents, { encoding: 'utf8' })
}

module.exports = { read, write }
