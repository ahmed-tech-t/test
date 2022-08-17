const mongoose = require("mongoose")
const validator = require('validator');


const User = mongoose.model("Users", {
    name: {
        type: String,
        require: true,
        trim: true //delelte empty space from beging and end
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    password: {
        type: String,
        minlength: 7,
        require: true,
    },
    age: {
        trim: true,
        default: 0,
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("age must be apostive number")
            }
        }
    }

})

module.exports = User;
