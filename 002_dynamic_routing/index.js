const express = require("express");

const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));
app.set('view engine' , 'ejs');


app.get("/",(req , res) =>
{
    res.render("index")
})
app.get("/profile/:username",(req , res) =>
{
    res.send(`welcome, ${req.params.username}`);
})
app.get("/profile/:username/:age",(req , res) =>
{
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
})

app.listen(9090 , ()=>{
    `${console.log("Chal Rha Hai!!")}`
})
