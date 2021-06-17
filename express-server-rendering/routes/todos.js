const route = require('express').Router()

let todos = [
    {task:"This is the first task"},
    {task:"This is anothr task"}
]

route.get('/', function(req, res) {
    res.render('todos.hbs', {todos})
})

route.post('/', function(req, res) {

})

module.exports = route