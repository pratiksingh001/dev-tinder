const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://pratikDB:YA74tcGSQ5LAcRhp@namastenode.p14q5.mongodb.net/devTinder")
}

module.exports = connectDB

