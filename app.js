const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render(`index`,{title:'Express View Engine', h1:'Express Application', p:'Express Template Engine'});
})

app.listen(port, () => console.log(`Server app listening on http://localhost:${port}...`))