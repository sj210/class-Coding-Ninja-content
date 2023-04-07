const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

//DB connection
require('./config/mongoose');

//import routes
const postRoutes = require('./routes/post');

//Middlewares
app.use(express.json());
app.use(cors()); 

//routes Middlewares
app.use("/post", postRoutes);


app.listen(PORT, () => console.log("server up and running"));