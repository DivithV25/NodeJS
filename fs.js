const {readFileSync,writeFileSync}=require('fs');

const first =readFileSync('./Folder1/Folder2/test1.txt','utf8')
const second =readFileSync('./Folder1/test.txt','utf8')

writeFileSync('./Folder1/result.txt',`Here is a result: ${first} ${second}`);
