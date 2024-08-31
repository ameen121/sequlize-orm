var db = require('../models/index');
 var User = db.user;
 const { Sequelize,Op,QueryTypes}   = require('sequelize');
const user = require('../models/user');

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
 var validateUser = async (req, res) => {
  let data = {}; // Changed from const to let
  const messages = {};
  try {
    data = await User.create({
      firstName: 'faizaj1n',
      lastName: 'Usman',
    });  
    res.status(200).json({ data: data });
  } catch (e) {
    console.log(e);
    let message;
    e.errors.forEach((error) => {
      switch (error.validatorKey) {
        case 'isAlpha':
          message = error.message;
          break;
      }
      messages[error.path] = message;
    });
    res.status(400).json({ errors: messages }); // Ensure a proper response is sent
  }
};
const rawQueries = async (req, res) => {
  const users = await db.sequelize.query('SELECT * FROM `users`', {
    type: QueryTypes.SELECT,
    model: User,
    mapToModel: true
  });
  res.status(200).json({ data: users });
};

module.exports = 
{ 
  addUser,
  getUsers,
  getUser,
  queryUser,
  finderUser,
  getSetVirtualUser,
  validateUser,
  rawQueries };