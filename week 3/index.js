const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})



// app.get("/health-checkup", function(req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "gaurav" || password != "pass") {
//         res.status(403).json({
//             msg: "User doesnt exit",
//         })
//         return;

//         if (kidneyId != 1 || kidneyId != 2) {
//             res.status(411).json({
//                 msg: "wrong inputs",
//             })
//             return;
//         }
//     }


//     res.send("Your heart is Healthy");
// })


app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "Gaurav" || password != "pass") {
        res.status(400).json({ "msg": "Somethings up with your inputs" })
        return
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ "msg": "Somethings up with your inputs" })
        return
    }
    res.json({
        msg: "Your kidney is fine"
    })

});


app.listen(3000);