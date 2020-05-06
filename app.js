const express = require('express');
const app = express();
const routes = require('./routes');


app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.send('Hello from Express!');
});
app.get('/*xyz',(req,res)=>{
    res.send("That's all I wrote.");
});

app.get('/capital-letters/:followedpath',(req,res)=>{
    res.send(`${req.params.followedpath.toUpperCase()}`)
});

app.use('/margot',routes);
app.use('/margeaux',routes);

app.all(/^\/[a-z0-9\-_]*$/i,(req,res)=>{
    const randomNumber = Math.floor(Math.random()*1000);
    res.render('layout',{method:req.method,path:req.path,randomNumber:randomNumber})
});


const port = 8081;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
