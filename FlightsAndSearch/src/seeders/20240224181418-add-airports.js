'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: "Mysuru Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kempegowda International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Manglaru International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: "Indira Gandhi International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Banglore International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
