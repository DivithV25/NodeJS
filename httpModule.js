const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('About Page')

    }
    res.end(`
        <h1>OOPS</h1>
        <p>We cant seem to find the page </p>
        <a href="/">Back Home</a>
        `)

})
server.listen(5000)