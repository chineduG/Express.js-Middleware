/**                       Session                 */

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const session = require('express-session')

// express-session created
app.use(session({
    secret:'Your Secret Key',
    reserve: true,
    saveUninitialized:true
}));

app.get('/', (req, res) =>{
    req.session.name = 'John';
    return res.send('Session Set')
})

app.get('/session', (req, res)=>{
    var name = req.session.name;
    console.log(req.session);
    return res.send(name);
})

app.get('/destroy', (req, res)=>{
    req.session.destroy(function(error){
        console.log('Session Destroyed');
    })
    res.end();
})


app.listen(port, () => console.log(`Server listening on localhost:${port}`))