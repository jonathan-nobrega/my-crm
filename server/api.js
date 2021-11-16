const express = require('express')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))

const frontEndInit = "localhost"

mongoose.connect("mongodb://localhost:27017/crmUsers")

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const secret = "Thisisourlittlesecret."
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })
const User = new mongoose.model("User", userSchema)

app.post("/register", (req, res) => {

    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })
    newUser.save((err) => {
        if (err) {
            console.log(err)
        } else {
            res.render("secrets")
        }
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ email: username }, (err, foundUser) => {
        if (err) {
            console.log(err)
        } else {

            if (foundUser.password === password) {
                res.send("found Login for" + username)
            } else {
                res.send("can't find user" + username)
            }
        }
    })
})

app.listen(8000, function () {
    console.log("Server started on port 8000.")
})
