const express = require('express')
const connectDB =  require('./config/database')
const app = express();

connectDB().then(() => {
    console.log("DB connected successfully")
    app.listen(3000, () => {
        console.log("Server is listening on PORT 3000")
    })
}).catch(() => {
    console.error("DB connection failed")
})