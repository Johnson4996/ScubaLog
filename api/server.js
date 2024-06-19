const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8080

// Middleware to parse JSON bodies
app.use(express.json())
app.use(cors({
    origin: ['https://scubalog.samjohnson.dev','http://localhost:3000'],
  }))

// Load the database (db.json)
const dbFilePath = path.join(__dirname, "db.json")
let database = JSON.parse(fs.readFileSync(dbFilePath, "utf8"))

// Utility function to save the database
const saveDatabase = () => {
  fs.writeFileSync(dbFilePath, JSON.stringify(database, null, 2))
}

// Routes

//Users routes
app.get("/api/users", (req, res) => {
  res.json(database.users)
})

app.post("/api/users", (req, res) => {
  const newUser = req.body
  newUser.id = database.users.length ? database.users[database.users.length - 1].id + 1 : 1
  database.users.push(newUser)
  saveDatabase()
  res.status(201).json(newUser)
})

//divelog routes
app.get("/api/divelogs", (req, res) => {
    res.json(database.divelogs)
  })

app.post("/api/divelogs", (req, res) => {
    const newDiveLog = req.body
    newDiveLog.id = database.divelogs.length ? database.divelogs[database.divelogs.length - 1].id + 1 : 1
    database.divelogs.push(newDiveLog)
    saveDatabase()
    res.status(201).json(newDiveLog)
})

app.delete("/api/divelogs/:id", (req, res) => {
    const { id } = req.params
    database.divelogs = database.divelogs.filter(divelog => divelog.id !== +id)
    saveDatabase()
    res.sendStatus(204)
})
app.put("/api/divelogs/:id", (req, res) => {
    const { id } = req.params
    const diveLog = database.divelogs.find(divelog => divelog.id === +id)
    const newDiveLog = req.body
    Object.assign(diveLog, newDiveLog)
    saveDatabase()
    res.status(200).json(diveLog)
})

//routes for wishlist
app.get("/api/wishlist", (req, res) => {
    res.json(database.wishlist)
  })

app.post("/api/wishlist", (req, res) => {
    const newWish = req.body
    newWish.id = database.wishlist.length ? database.wishlist[database.wishlist.length - 1].id + 1 : 1
    database.wishlist.push(newWish)
    saveDatabase()
    res.status(201).json(newWish)
})

app.delete("/api/wishlist/:id", (req, res) => {
    const { id } = req.params
    database.wishlist = database.wishlist.filter(wish => wish.id !== +id)
    saveDatabase()
    res.sendStatus(204)
})

//routes for tank and suit types
app.get("/api/tanktypes", (req, res) => {
    res.json(database.tanktypes)
  })

app.get("/api/suittypes", (req, res) => {
    res.json(database.suittypes)
  })



app.use(express.static(path.join(__dirname, "build")))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
