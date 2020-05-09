'use strict';

const random = require('../utils').selectRandomFromArray;

const faker = require('faker/locale/en');
const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Express', 'Python', 'Flask', 'Django', 'Spring'];

const generateTechnologies = (number) => {
  let str = '';

  for (let i = 0; i < number - 1; i++) {
    str = str.concat(`${random(techs)}, `)
  }
  
  return str.concat(`${random(techs)}`);
}

const generateGigs = (number) => {
  return new Array(number).fill(0).map(value => {
    const fname = faker.name.firstName();
    const lname = faker.name.lastName();

    return {
      title: `${fname} ${lname}`,
      technologies: generateTechnologies(3),
      description: 'Always Lorem Ipsum',
      budget: (Math.random() * 1000).toString(),
      contact_email: faker.internet.email(fname, lname, 'example.com'),
    }
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Gigs', generateGigs(10))
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gigs', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
