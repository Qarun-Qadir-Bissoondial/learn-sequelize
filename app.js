const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const db = require('./config/database');

// Option 1: Passing parameters separately
db.authenticate()
.then(() => { console.log('Database connected...') })
.catch(error => { console.error(error); });

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('index');
});

// Gig routes

app.use('/gigs', require('./routes/gigs'));

app.listen(port,  () => { console.log(`Server started on ${port}`); });
