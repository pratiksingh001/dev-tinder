const express = require('express')

const app = express();

app.get("/user", (req, res) => {
    res.send({firstName: "Pratik", lastName: "Singh"})
})

app.post("/user", (req, res) => {
    res.send("Data saved successfully")
})

app.delete("/user", (req, res) => {
    res.send("User deleted")
})

app.use("/test", 
[(req, res, next) => {
    console.log("1st route")
    next();
},
(req, res, next) => {
    console.log("2nd route")
    next()
}],
(req, res, next) => {
    console.log("3rd route")
    res.send("3rd handler")
    next()
},
(req, res, next) => {
    console.log("4th route")
    res.send("4th handler")
},
)
 
app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})