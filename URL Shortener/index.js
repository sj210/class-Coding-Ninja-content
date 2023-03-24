const express = require('express');
const PORT = 8000;
const app = express();

const db = require('./config/mongoose');
const shortURL = require('./modals/shortUrl');

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));


app.get('/', async (req, res)=>{
    const shortUrl = await shortURL.find({});
    res.render('index.ejs', {shortUrl:shortUrl})
})

app.post('/shortUrls', async (req, res) =>{
    await shortURL.create({
        full: req.body.fullUrl
    });
    res.redirect('/');
});


app.get('/:shortURL', async (req, res) =>{
    const shortUrl = await shortURL.findOne({
        short : req.params.shortURL
    });

    if(shortUrl === null){
        return res.render('notFound.ejs');
    }
    shortUrl.clicks ++;
    shortUrl.save();
    res.redirect(shortUrl.full);
})




app.listen(PORT, function (err){
    if(err){
        console.log(`Error ${err}`)
    }
    console.log("Server up and runnning");
})