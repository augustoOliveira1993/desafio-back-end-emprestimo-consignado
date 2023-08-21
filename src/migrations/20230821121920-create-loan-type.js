'use strict';
const {generatorUUID} = require("../utils/helpers");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LoanTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        uuid: {
            type: Sequelize.UUID,
            defaultValue: generatorUUID()
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        interest_rate: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LoanTypes');
  }
};
