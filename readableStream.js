const {createReadStream} =require('fs');
 const stream = createReadStream('first.txt',{highWaterMark:20000,encoding:'utf8'})
 
 //high water mark is used to control size of buffer in chunk

 stream.on('data',(result)=>{
    console.log(result)
 })

 stream.on('error',(err)=>{
   console.log(err)
 })
 //This is used to acces continous flow of data