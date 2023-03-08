const express = require("express");
const lalala = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static('public'));



app.get("/", (req, res) =>{
    res.render('view/index');
});

app.get("login", (req, res) =>{
    res.sendFile(__dirname + '/public/login.html');
})

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});