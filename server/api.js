const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const app = express();

app.use(cors());
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/userDB")
const secret = "Thisisourlittlesecret."


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })
const User = new mongoose.model("User", userSchema)

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    code: String,
    phone: String,
    company: String
})
const Customer = new mongoose.model("Customer", customerSchema)


app.post("/register", (req, res) => {

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })
    newUser.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("new user registered")
        }
    })
})

app.post("/login", async (req, res) => {


    const {email, password} = req.body
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

app.get("/customers", async (req, res) => {

    console.log('entrou no customers')
    const customers = await Customer.find().where('customers')
    const response = JSON.stringify(customers)
    // console.log(response)
    res.send(response)
})

app.post("/addCustomer", async (req, res) => {

    const {name, email, code, phone, company} = req.body

    const newCustomer = new Customer({
        name: name,
        email: email,
        code: code,
        phone: phone,
        company: company
    })
    newCustomer.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("new customer added")
        }
    })

})

app.listen(8000, function () {
    console.log("Server started on port 8000.")
})
