const Eventemitter = require('events')

const customEmitter = new Eventemitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved user ${name} with id ${id}`)
})

customEmitter.on('response',()=>{
    console.log('Other data recieved')
})

customEmitter.emit('response','divith',23)