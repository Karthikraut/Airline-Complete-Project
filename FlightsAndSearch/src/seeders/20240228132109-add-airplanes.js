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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber : 'Boeing 347' ,
        capacity:   300,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        modelNumber : 'Boeing 727' ,
        capacity:   300,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        modelNumber : 'Airbus A330' ,
        capacity:   300,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        modelNumber : 'Boeing 777' ,
        capacity:   300,
        createdAt: new Date(),
        updatedAt: new Date()
       }], {});
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
