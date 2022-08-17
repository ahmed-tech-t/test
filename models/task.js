const validator = require('validator')
const mongoose = require('mongoose')

const Task = mongoose.model("Tasks", {
    description: {
        type: String,
        default: "none",
        trim : true
    },
    completed: {
        default: false,
        type: Boolean,
        trim : true
    }
})

module.exports = Task;