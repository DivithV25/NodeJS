const {writeFile,readFile} = require('fs');
readFile('./Folder1/test.txt','utf8',(err,result)=>{
if(err){
console.log(err);
 return;    
}
const first=result;
readFile('./Folder1/Folder2/test1.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
const second=result;
writeFile('./Folder1/result1.txt',`Here is the result : ${first} ${second}`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
   
})

    
})

})