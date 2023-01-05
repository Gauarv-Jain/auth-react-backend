const mongoose = require("mongoose")

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/authstuf").then(()=> {
    console.log("Connected to MongoDB")
}).catch((e)=> {
    console.log(e)
    console.log("Error connecting to MongoDB " + e.message)
})