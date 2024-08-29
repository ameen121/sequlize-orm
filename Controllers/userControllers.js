var db = require('../models/index');
 var User = db.user;
 const { Sequelize,Op}   = require('sequelize');

var addUser = async (req, res) => {
    const jane = User.build({ firstName: 'Ameen', lastName: 'Usman' });
    await jane.save();
    console.log(jane.toJSON()); // Correct usage to log the data
    res.status(200).send(jane.toJSON());
    
}
var getUsers = async (req, res) => {
    const data = await User.findAll({});
    res.status(200).json({data: data});
}
var queryUser = async (req, res) => {
    const data = await User.findAll({
        where: {
          id: {
            [Op.eq]: 2,
          },
        },
      });
    res.status(200).json({data: data});
}
var getUser = async (req, res) => {
    const data = await User.findOne({
        where:{
            id: req.params.id,
        }
    });
    res.status(200).json({data: data});
}
var finderUser = async (req, res) => {
   const {count, rows} = await User.findAndCountAll({
        where: { lastName: 'usman' }
      });
    res.status(200).json({data: rows, count: count});
}
var getSetVirtualUser = async (req, res) => {
    const data = await User.findAndCountAll();
     res.status(200).json({data: data});
 }
module.exports = { addUser,getUsers,getUser,queryUser,finderUser,getSetVirtualUser };