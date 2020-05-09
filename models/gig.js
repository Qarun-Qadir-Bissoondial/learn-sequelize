'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Gig = sequelize.define('Gig', {
    title: DataTypes.STRING,
    technologies: DataTypes.STRING,
    description: DataTypes.STRING,
    budget: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    id: {type: DataTypes.UUID, primaryKey: true},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  Gig.beforeCreate((user, _) => {
    return user.id = uuid();
  });
  
  Gig.associate = function(models) {
    // associations can be defined here
  };
  return Gig;
};