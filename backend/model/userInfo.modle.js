const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
        unique : true,
    },
    blogs : [{
        title : {
            type : String
        },
        date : {
            type : String
        },
        category : {
            type : String,
        },
        description : {
            type :String,
        },
        like : {
            type :Number,
        },
        dislike : {
            type : Number
        },
        comment : [{
            email : String,
            text : String,
        }]
    }]
})

const userAccSchema = mongoose.model("userBlogs" , userSchema)

module.exports = userAccSchema