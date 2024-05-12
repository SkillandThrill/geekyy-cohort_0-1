const express = require("express")
const app = express()

var users = [{
        name: 'Gaurav',
        kidneys: [{
            healthy: true,
        }],
        name: 'Varun',
        kidneys: [{
            healthy: false,
        }, {
            healthy: true,
        }],
        name: "Ronak",
        kidneys: [{
            healthy: false,
        }, {
            healthy: false,
        }],
    }]
    // console.log(users[0]);


app.use(express.json());
app.get("/", function(req, res) {
    // write logic to users
    const gauravKidneys = users[0].kidneys;
    // console.log(gauravKidneys)
    const numberOfKidneys = gauravKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < gauravKidneys.length; i++) {
        if (gauravKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// filer in js

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})




app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res) {

    if (isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "Done" })
    } else {
        res.status(411).json({
            msg: "You have no Bad kidney!!"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);