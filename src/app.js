const express = require('express')

const app = express();

// GET /user ===> middleware chain => request handler

app.use("/user", 

// these two are known as middleware which run before the actual route handler
(req, res, next) => {
    console.log("1st route")
    next()
},
(req, res, next) => {
    console.log("2nd route")
    next()
},
// this is known as the route handler because this is actually handling the request
(req, res, next) => {
    console.log("3rd route")
    res.send("3rd handler")
},
)
app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})