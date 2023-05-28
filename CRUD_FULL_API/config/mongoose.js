const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD_September");

const db = mongoose.connection;

db.on("error" , console.error.bind(console, "connection problem")); 

db.on("open", function(){
    console.log("connection success MongoDb");
});

module.exports = db;