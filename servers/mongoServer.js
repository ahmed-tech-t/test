const mongoose = require("mongoose")

const dataBaseName = "task-manager-api"
const url ="mongodb://127.0.0.1:27017/"
const connectionURL = url + dataBaseName

mongoose.connect(connectionURL, {
    usenewUrlParser: true
}).then((result) => {
    console.log("connected to Mongo Server")

}).catch((error) => {
    console.log("can't connect to Mongo Server")

})