const router = require('express').Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) => 
    Gig.findAll()
        .then((data) => { console.log(data); res.sendStatus(200);} )
        .catch((error) => { console.log(error); res.sendStatus(500); }));

module.exports = router;