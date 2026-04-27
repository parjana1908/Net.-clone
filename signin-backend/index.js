const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({ origin: "*" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


let users = [{ username: "demo", password: "1234" }]

app.post("/login", function (req, res) {
  const { username, password } = req.body
  const found = users.find(u => u.username === username && u.password == password)
  res.send(!!found)
})

app.post("/signup", function (req, res) {
  const { username, password } = req.body
  const exists = users.find(u => u.username === username)
  if (exists) {
    res.send(false) 
  } else {
    users.push({ username, password })
    res.send(true)
  }
})

app.listen(5000, function () {
  console.log("server started on port 5000...")
})