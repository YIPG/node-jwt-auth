const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
app.use(cookieParser())

app.get("/", (req, res) => {
  res.cookie("name", "express").send("cookie set")
})

app.get("/unko", (req, res) => {
  res.send(req.cookies)
})

app.listen(5000, () => console.log("listening at localhost:5000"))
