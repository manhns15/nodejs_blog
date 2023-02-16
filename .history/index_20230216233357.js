// import thu vien express 
const express = require('express');
// call function express
const app = express()
// run port cong nao?
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})