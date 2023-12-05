const DataTypes = require("sequelize")

const createProductModel = (sequelize,modelName) => {
    return sequelize.define(modelName, {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deprecation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        // Other model options go here
        tableName: 'products',
        createdAt: false,
        updatedAt: false,
    });
};

module.exports = { createProductModel };