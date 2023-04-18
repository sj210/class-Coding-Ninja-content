const express = require('express');
const PORT = 8080;
const app = express();
const routePosts = require('./routes/postRoute')

app.use(express.json());

app.use('/posts',routePosts);


app.listen(PORT, () =>{
    console.log(`Up and running ${PORT}`);
})