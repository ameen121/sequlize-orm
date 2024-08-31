const express = require('express')
var  bodyParser = require('body-parser')
var userController = require('./Controllers/userControllers');
require('./models')
const app = express()
app.use(bodyParser.json())

app.get('/add/users', userController.addUser);

app.get('/get/users', userController.getUsers);

app.get('/get/user/:id', userController.getUser);

app.get('/query', userController.queryUser);

app.get('/finder', userController.finderUser);

app.get('/get-set-virtual', userController.getSetVirtualUser);

app.get('/validate-user', userController.validateUser);

app.get('/raw-queries', userController.rawQueries);

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8000,()=>{
    console.log('Server started on port 8000')
})