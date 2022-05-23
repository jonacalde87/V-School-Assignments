const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

//fake data
const todos = [
    {
        name: "study for v school",
        description: "level 5, almost halfway",
        imgUrl: "https://www.notion.so/vschooldesign/Level-5-Express-and-MongoDB-7e92ab3e1ba1480f863ef5325630e9ae",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "clean the house",
        description: "all rooms, bathrooms",
        imgUrl: "https://www.nytimes.com/guides/smarterliving/how-to-clean",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "cook lunch",
        description: "pasta",
        imgUrl: "https://www.jessicagavin.com/how-to-cook-pasta/",
        completed: false,
        _id: uuidv4()
    }
]

//Routes
todoRouter.route("/")
    //Get all
    .get((req, res) => {
        res.send(todos)
    })
    //Get One
    todoRouter.route("/:todoId")
        .get((req, res) => {
            const todoId = req.params.todoId
            const foundTodo = todos.find(todo => todo._id === todoId)
            res.send(foundTodo)
        })
    //Post one
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Successfully added ${newTodo.name} to the database!`)
    })
    //Update One
    todoRouter.put("/:todoId", (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    })
    //Delete one
    todoRouter.delete("/:todoId", (req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send("Successfully deleted todo!")
    })

module.exports = todoRouter