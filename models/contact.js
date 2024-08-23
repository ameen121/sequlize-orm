//const { DataTypes } = require('sequelize');
//const sequelize = require('../models/index')
module.exports = (sequelize, DataTypes, Model) => {
    class contact extends Model {}
    contact.init(
        {
            // Model attributes are defined here
            permanent_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            current_address: {
                type: DataTypes.STRING,

                // allowNull defaults to true
            },
        },
        {
            sequelize,
            modelName: "contact",
            tableName: "contacts",
        },
    );
    return contact;
}