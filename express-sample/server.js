const express = require('express')
const srv = express();
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.get('/hello', function (req, res) {
    res.send("Hello")
})

srv.use('/public', express.static(__dirname + "/public")) //exoress.static-it makes folder available for static website(static html page i.e content remains same)

srv.use('todos', todoRoute)

srv.listen(4567);