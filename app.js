const express = require('express');
const app = express();
const path = require('path');


//let htmlPath = path.join(__dirname, '/views/home.html');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');

});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');

})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');

})

app.listen(3000, () => console.log("Server on"));


app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo"));