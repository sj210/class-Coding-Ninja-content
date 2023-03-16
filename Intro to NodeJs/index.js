const express = require('express');
const PORT =8000;
const app = express();


app.use(express.json())

app.get('/hello', (req,res) => {
    return res.status(200).json({
        msg:"hello",
        data:req.query
    })
})

app.get('/post/:postId', (req, res) => {
    const postId = req.params.postId;

    return res.status(200).json({
        msg:"PostId details",
        data:postId
    })

})


app.post('/post', (req, res) => {
    const postBody = req.body;
    return res.status(200).json({
        msg:"Post details of body",
        data: postBody
    })
})

app.listen(PORT, () => {
    console.log(`Up and running`)
})

