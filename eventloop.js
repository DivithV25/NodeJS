const http=require('http');
const server = http.createServer((req,res)=>{
    console.log("request event")
    res.end("Hello World")

})

server.listen(5000,()=>{
    console.log("This port is runnning at port : 5000")
})
///event loop offload asynchronus task for sometime and runs the immediate task