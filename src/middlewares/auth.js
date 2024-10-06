const adminAuth = (req, res, next) =>{
    console.log("Admin Auth")
    const token = "xyz"
    const isAuthenticated = token === "xyz"
    if(!isAuthenticated){
        res.status(401).send("Unauthorized request")
    }else{
        next()
    }
}
const userAuth = (req, res, next) =>{
    console.log("User Auth")
    const token = "xyz"
    const isAuthenticated = token === "xyz"
    if(!isAuthenticated){
        res.status(401).send("Unauthorized request")
    }else{
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}