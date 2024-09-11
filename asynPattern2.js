const {readFile,writeFile}=require('fs')
const util = require('util')
const readFilePromise =util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFilePromise('./Folder1/test.txt','utf8')
        const second = await readFilePromise('./Folder1/Folder2/test1.txt','utf8')
        await writeFilePromise('test3.txt',`This is addition : ${first} ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()