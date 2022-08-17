const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.listen(port, () => {
    console.log("server is conecting in port "+port)
})

module.exports = app

