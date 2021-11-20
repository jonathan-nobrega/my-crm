const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const app = express();

app.use(cors());
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
const secret = "Thisisourlittlesecret."
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })
const User = new mongoose.model("User", userSchema)

// ==> preciso registrar um usuario usando o hash primeiro, somente assim
// o mongoose vai encontrar um usuario com o password que estou procurando
// com o uso do 'secret'

app.post("/register", (req, res) => {

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })
    newUser.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("registro feito")
        }
    })
})

app.post("/login", async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    console.log(password)

    let token = null

    User.findOne({ email: email }, (err, foundUser) => {
        if (err) {
            console.log('deu erro em')
            console.log(err)
        } else {

            if (foundUser.password === password) {
                console.log("correct password for " + email + ": " + foundUser._id)
                res.send(foundUser._id)
            } else {
                console.log("wrong password for " + email + ": " + foundUser._id)
                res.send(null)
            }
        }
    })
})

app.listen(8000, function () {
    console.log("Server started on port 8000.")
})
