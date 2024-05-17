const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/health-checkup", function(req, res) {

    res.send("Your heart is Healthy");
})

app.listen(3000);