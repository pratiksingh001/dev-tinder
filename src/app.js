const express = require('express')
const connectDB =  require('./config/database')
const app = express();
const User = require('./models/user')

// This is the middleware to able to read the JSON request body by converting it into JS object
app.use(express.json());

app.post("/signup", async (req, res) => {
    // Creating a new instance of the User model
    const user = new User(req.body)

    try{
        await user.save()
        res.status(200).send("User added successfully")
    }catch(err){
        res.status(400).send("Error saving user" + err.message)
b 
    }
})
connectDB().then(() => {
    console.log("DB connected successfully")
    app.listen(3000, () => {
        console.log("Server is listening on PORT 3000")
    })
}).catch(() => {
    console.error("DB connection failed")
})