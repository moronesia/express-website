const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const path = require("path")

const app = express()

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/img", express.static(__dirname + "/public/img"))


app.set("views", "./views")
app.set("view angine", "ejs")

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/skills", (req, res) => {
    res.render("skills.ejs")
})

app.get("/others", (req, res) => {
    res.render("others.ejs")
})

app.get("/friends", (req, res) => {
    res.render("friends.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})



app.listen(3000, ()=>{
    console.log("server at http://localhost:3000")
})