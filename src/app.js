const express = require('express')

const app = express();

app.get("/getUserData", (req, res) => {
    // try{
        throw new Error("Random error")
        res.send("All user data")
    // }catch(err){
    //     res.status(500).send("Something went wrong please contact support team")
    // }
})

app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Something went wrong")
    }
})

app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})