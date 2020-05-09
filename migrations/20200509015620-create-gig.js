'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .then(() => {
        return queryInterface.createTable('Gigs', {
          id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
            type: Sequelize.UUID
          },
          title: {
            type: Sequelize.STRING
          },
          technologies: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          budget: {
            type: Sequelize.STRING
          },
          contact_email: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("(now() at time zone 'utc')")
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("(now() at time zone 'utc')")
          }
        });
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gigs');
  }
};