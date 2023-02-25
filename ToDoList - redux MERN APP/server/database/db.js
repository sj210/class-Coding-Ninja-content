import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/TodoListAPP');

const db = mongoose.connection;

db.on("error", console.error.bind(console,"connction problem"));

db.on("open", function(){
    console.log("connection is established")
});
