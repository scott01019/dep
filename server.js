const express = require("express")
const parser = require("body-parser")
const path = require("path")

const app = express()

app.use(parser.json())

app.all("*", (req, res) => {
    res.json({ message: "It's working my dude." })
})

app.listen(8080)