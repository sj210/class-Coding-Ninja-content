const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect("mongodb://localhost:27017/DataBaseFolder");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection problem mongo"));

db.on("open", ()=>{
    console.log("Connected to MongoDB");
})