const express = require("express")
require("dotenv").config({path: "config/.env"})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT,(err)=>{
    if(err){
        return console.log(err)
    }
    console.log(`http://localhost:${process.env.PORT}`)
})

module.exports = app
