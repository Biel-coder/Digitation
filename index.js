const express = require('express')
const app = express()

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/teste.html",(req,res) => {
    res.sendFile(__dirname + "/teste.html")
})

app.listen(3000)