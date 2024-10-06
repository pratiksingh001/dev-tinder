const express = require('express')

const app = express();

const {adminAuth, userAuth} = require('./middlewares/auth')

app.use("/admin", adminAuth)

app.get("/admin/getAllUser",
(req, res) => {
    res.send("All data sent")
})
app.delete("/admin/deleteUser", (req, res) => {
    res.send("User deleted")
})

app.get("/user", userAuth, (req, res) => {
    res.send("All user data")
})

app.listen(3000, () => {
    console.log("Server is listening on PORT 3000")
})