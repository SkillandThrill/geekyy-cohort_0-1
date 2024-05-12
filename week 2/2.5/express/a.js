const fs = require("fs");

fs.readFile("a.txt", function(err, data) {
    console.log(data)
})