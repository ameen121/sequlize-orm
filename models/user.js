module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model {}
    User.init(
        {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true, // allowNull defaults to true, so this line is technically optional
            },
        },
        {
            sequelize,
            //modelName: "User", // Capitalize model name if you want to stick to Sequelize conventions
            tableName: "users", // Make sure this matches your table name in the database
            timestamps: true,   // Include timestamps if you want createdAt and updatedAt fields
        },
    );
    return User;
};
