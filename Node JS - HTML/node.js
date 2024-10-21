const http = require('http');
const {readFileSync} = require('fs');
const homePage=readFileSync('./index.html');
const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page Not Found</h1>')
        res.end()

    }
})

server.listen(5000);

// WHEN YOU ARE SETTING UP A  WEB PAGE WHAT EVER THE FILE THAT IS ACCESSING SHOULD BE MENTIONED IN THE NODE JS 