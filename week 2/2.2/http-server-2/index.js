const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());


app.post('/backend-api/conversation', (req, res) => {
    const message = req.body.message;
    console.log(message)
    res.json({
        output: "2 + 2 = 4"
    })

})

app.get('/', (req, res) => {
    console.log("HI...")
})



app.listen(port, () => {
    console.log(`Example app listening  on port${port}`)
})