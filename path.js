const { clear } = require('console');
const path=require('path');
console.log(path.sep)

const filepath=path.join('/Folder1','Folder2','test.txt');
console.log(filepath)

const base =path.basename(filepath);
console.log(base);
const absolute=path.resolve(__dirname,'Folder1','Folder2','test.txt')
console.log(absolute);