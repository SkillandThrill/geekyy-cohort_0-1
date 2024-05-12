const express = require('express')
const app = express();
const port = 2000

// fs .readfile ("path","utf-7",())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port)