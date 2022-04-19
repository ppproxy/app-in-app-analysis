const fs = require("fs")
const {Parser} = require("acorn")
var file_exist = false
var file_path = process.argv[2]
var src = NaN
try {
    src = fs.readFileSync(file_path, 'utf-8')
    file_exist = true
} catch (error) {
    file_exist = false
}
if (file_exist) {
    try {
        const tree = Parser.parse(src, {'locations': true, 'ecmaVersion': '2020'})
        file_path = file_path.replace("-clean.js", "-ast.json")
        fs.writeFile(file_path, JSON.stringify(tree), err => {
            if (err) {
                console.error("Write Error")
                console.error(file_path)
                console.error(err)
            }
        })
    } catch (error) {
        console.error("Parse Error")
        console.error(file_path)
        console.error(error)
    }
}
