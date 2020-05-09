const router = require('express').Router();
const db = require('../models/index');
const Gig = require('../models/gig')(db.sequelize, db.Sequelize.DataTypes);

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => { console.log(gigs); res.status(200).render('gigs', { gigs: gigs.map(gig => gig.toJSON()) }); })
        .catch(error => { console.error(error); res.status(500).send(error); })
});

module.exports = router;