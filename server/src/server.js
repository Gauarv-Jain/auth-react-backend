require('dotenv').config();
const express = require("express")
const path = require("path")
require("./db/conn")
const User = require("./models/user")
let bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authenticate = require('./middelware/authenticate')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
const poart = process.env.PORT || 4000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const staticpath = path.join(__dirname, "..")

app.get("/", (req, res) =>{
    res.send("asdbajsdnasda")
})

app.post("/register", async (req, res) => { 
    try{
        console.log(req.body)
        const userdata = new User(req.body)

        const token = await userdata.generateAuthToken();
        console.log(token);

        res.cookie("jwt", token, { 
            expires: new Date(Date.now()+3000000),
            httpOnly: true
        })
        //console.log(cookie)

        const toret  = await userdata.save()
        res.status(201).send(toret)
    }catch(err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
})

app.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body

        const userLogin = await User.findOne({ email: email})
        
        if(!userLogin){
            throw new Error(`Email is wrong asd u biatch`)
        }

        console.log(userLogin)

        const ismatch = await bcrypt.compare(password, userLogin.password)

        if(!ismatch){
            throw new Error(`pass doesn not match`)
        }

        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwt", token, { 
            expires: new Date(Date.now()+3000000),
            httpOnly: true
        })

        res.status(200).json(userLogin)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.get('/about', authenticate, (req, res) => {
    console.log("hellow from about page");
    res.status(200).send(req.rootUser);
})

app.listen(poart, () => {
    console.log(`server is running on port ${poart}`)
})