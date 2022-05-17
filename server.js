const exp = require('constants');
const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000


// set pug file name
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware => data serialization
app.use(express.urlencoded({
    extended:true
}));

//  
app.get('/',(req, res) => 
res.render(`index`,{title:'Form Handling'}));

// get username & email using 
app.post('/form_submit', (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    res.end(`Your Username is ${username} and Email is ${email}`) 
})


app.listen(port, () => console.log(`Server listening on http://localhost${port}`))