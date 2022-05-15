const car = require('./index.js');


console.log(car);
// promises

let promise = new Promise(function(resolve, reject){
    // setTimeout(() =>  reject(new Error('404 whoops')), 1000)
    setTimeout(() =>  resolve('Welcome  Home'), 1000)

})

promise.then(
    result => {
        console.log(result);
    },
    error => console.log(error)
)

// HTTP

const http = require('http')
const hostname = '127.0.0.1';
const port = 3000


http.createServer((req, res) => {
    res.statusCode = '200';
    res.end('Welcome to HTTP server');
}).listen(port, hostname, () =>{
    console.log(`Server running at http ${hostname}:${port}`);
})

