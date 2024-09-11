const {readFile,writeFile}=require('fs').promises
// const util = require('util')
// const readFilePromise =util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFile('./Folder1/test.txt','utf8')
        const second = await readFile('./Folder1/Folder2/test1.txt','utf8')
        await writeFile('test3.txt',`This is addition : ${first} ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()