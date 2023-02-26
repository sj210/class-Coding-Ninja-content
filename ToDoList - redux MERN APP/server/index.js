import express from "express";
import Routes from './routes/route.js';
import cors from 'cors';
import './database/db.js';

const app = express();

app.use(cors());
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}));

app.use('/', Routes);

const PORT = 8000;

app.listen(PORT, () =>{
    console.log(`Your server is up and running on ${PORT}`)
})

