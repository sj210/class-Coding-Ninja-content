const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD_septemper");

const db = mongoose.connection;

db.on("error", console.error.bind(console,"connection problem occured"));

db.on("open", function (){
    console.log("Connected to MongoDB successfully")
})

module.exports = db;