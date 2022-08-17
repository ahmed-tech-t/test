const express = require("express")
const router = new express.Router()
const Task = require('../models/task')


router.patch("/tasks/:id", async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdate = ['completed']
        const isValidOperation = updates.every(update => allowedUpdate.includes(update))
        if (!isValidOperation) res.status(400).send({ eroor: "invalid update" })
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        console.log(task)
        if (!task) res.status(404)
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500)
    }
})


router.delete("/task/:id", async (req, res) => {
    try {
        const task = await User.findByIdAndDelete(req.params.id)
        if (!task) res.status(404)
        res.send ({notice : "user deleted"})
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;
