const express = require('express')
const app = express()
const cookies = require('cookie-parser')
const port = process.env.port || 3000;


app.use(cookies())

let users = {
    name:'John',
    age: 28
}

// send cookies
app.get('/', (req, res)=>{
    res.send('Cookies ')
})

// set cookies
app.get('/setuser', (req,  res)=>{
    res.cookie('UserData', users);
    res.send('User Data Added to Cookies');
})

// get cookies
app.get('/getuser', (req, res)=>{
    res.send(req.cookies);
})


// logout user cookies
app.get('/logout', (req, res) => {
    res.clearCookie('UserData');
    res.send('User logged out Successfully');
})
 
app.listen(port, () => console.log(`Server app listening on localhost:${port}`))