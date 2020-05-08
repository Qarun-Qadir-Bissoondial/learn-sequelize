const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const 

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(port,  () => { console.log(`Server started on ${port}`); });
