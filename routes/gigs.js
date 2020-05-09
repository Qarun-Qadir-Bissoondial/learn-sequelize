// const router = require('express').Router();
// const db = require('../config/database');
// const Gig = require('../models/Gig');

// router.get('/', (req, res) => 
//     Gig.findAll()
//         .then((data) => { console.log(data); res.sendStatus(200);} )
//         .catch((error) => { console.log(error); res.sendStatus(500); })
// );

// router.get('/add', (req, res) => {
//     const data = {
//         title: 'Looking for a React Developer',
//         technologies: 'react, javascript, html, css',
//         budget: '$3000',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at consequat augue, sed faucibus urna. Cras at orci molestie, bibendum purus a, consequat mi. Sed mollis luctus metus vel vehicula. Praesent in ex maximus, malesuada orci ut, viverra lectus. Duis mattis elit id aliquam pellentesque. Maecenas in nisi ut ipsum tincidunt sagittis id at tellus. Donec varius mauris lacus, eu tristique lectus interdum a.',
//         contact_email: 'user1@gmail.com'
//     }

//     let { title, technologies, budget, description, contact_email } = data;

//     Gig
//         .create({title, technologies, budget, description, contact_email})
//         .then(gig => res.redirect('/gigs'))
//         .catch(error => { console.error(error); res.status(500).send(error); });
// }) 


// module.exports = router;