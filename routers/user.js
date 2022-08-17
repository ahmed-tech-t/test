const express = require("express")
const router = new express.Router()
const User = require('../models/user')


router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500)
    }
})

router.get("/users/:id", async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        console.log(user)
        if (!user) res.status(404)
        else res.send(user)
    } catch (error) {
        res.status(500)
    }
})

router.patch("/users/:id", async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdate = ['name', 'email', 'age', 'password']
        const isValidOperation = updates.every(update => allowedUpdate.includes(update))
        if (!isValidOperation) res.status(400).send({ eroor: "invalid update" })
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        console.log(user)
        if (!user) res.status(404)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) res.status(404)
        res.send ({notice : "user deleted"})
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;