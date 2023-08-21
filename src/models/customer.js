'use strict';
const {
    Model
} = require('sequelize');
const {generatorUUID} = require("../utils/helpers");
module.exports = (sequelize, DataTypes) => {
    class Customers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Customers.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: generatorUUID()
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        document: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        income: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Customers',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return Customers;
};
