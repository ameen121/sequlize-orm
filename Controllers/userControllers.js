var db = require('../models/index');
 var User = db.user;

var addUser = async (req, res) => {
    const jane = User.build({ firstName: 'Ameen', lastName: 'Usman' });
    await jane.save();
    console.log(jane.toJSON()); // Correct usage to log the data
    res.status(200).send(jane.toJSON());
    
}
module.exports = { addUser };