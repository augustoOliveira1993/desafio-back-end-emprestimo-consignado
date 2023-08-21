'use strict';
const {
    Model
} = require('sequelize');
const {generatorUUID} = require("../utils/helpers");
module.exports = (sequelize, DataTypes) => {
    class LoanTypes extends Model {
        static associate(models) {
            // define association here
        }
    }

    LoanTypes.init({
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interest_rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'LoanTypes',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return LoanTypes;
};
