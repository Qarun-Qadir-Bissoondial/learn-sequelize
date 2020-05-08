const Seq = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
    title: {
        type: Seq.STRING
    },
    technologies: {
        type: Seq.STRING
    },
    description: {
        type: Seq.STRING
    },
    budget: {
        type: Seq.STRING
    },
    contact_email: {
        type: Seq.STRING
    },
    id: {
        type: Seq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: {
        type: Seq.DATE
    },
    updatedAt: {
        type: Seq.DATE
    },

});

module.exports = Gig;