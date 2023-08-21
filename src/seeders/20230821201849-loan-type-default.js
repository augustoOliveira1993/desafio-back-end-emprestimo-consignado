'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const data = [
          {
              uuid: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
              type: "PERSONAL",
              interest_rate: 4,
              created_at: new Date(),
              updated_at: new Date()
          },
          {
              uuid: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12",
              type: "GUARANTEED",
              interest_rate: 3,
              created_at: new Date(),
              updated_at: new Date()
          },
          {
              uuid: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13",
              type: "CONSIGNMENT",
              interest_rate: 2,
              created_at: new Date(),
              updated_at: new Date()
          }
      ];

      await queryInterface.bulkInsert('LoanTypes', data, {});

      return Promise.resolve();
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('LoanTypes', null, {});

        return Promise.resolve();
  }
};
