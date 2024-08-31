const { Sequelize,DataTypes,Model }   = require('sequelize');
const dbname   = "sequelize_orm";
const username ="root"
const password =""


const sequelize = new Sequelize(dbname, username, password, {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user      = require('./user')(sequelize, DataTypes, Model)
db.contact   = require('./contact')(sequelize, DataTypes, Model)

db.user.hasOne(db.contact,{foreignKey: 'user_id'});
db.contact.belongsTo(db.user);
//console.log('index'+db)
db.sequelize.sync({force:false})
module.exports=db;