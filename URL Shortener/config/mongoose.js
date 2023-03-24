const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/SeptBatch1GroupE");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "console problem mongo"));


db.on("open", function (){
    console.log("Connected to MongoDb successfully")
});