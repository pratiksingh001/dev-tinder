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

// get user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.email

    try{
        // * findOne({{email: userEmail}}) method => this will only give single object => this will give the oldest object(not sure)
        // const users = await User.findOne({email: userEmail})
        // res.send(users)
        // * find({{email: userEmail}}) method =>  will give all objects with same email
        const users = await User.find({email: userEmail})
        if(users.length === 0){
            res.status(404).send("User not found")
        }else{
            res.send(users)
        }
    }catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.get("/getUserById", async(req, res) => {
    const userID = req.body._id

    try{
        const users = await User.findById({_id: userID})
        res.send(users)
    }catch(err){
        res.status(400).send("User not found")
    }
})

// Feed API - /feed -> this Api will get all the users form DB
app.get('/feed', async (req, res) => {
    try{
        // by passing empty object in the find function -> we will get the entire list
        const users = await User.find({})
        if(users.length === 0){
            res.status(400).send("No user found")
        }else{
            res.send(users)
        }
    }catch(err){
        res.status(400).send('Something went wrong')
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