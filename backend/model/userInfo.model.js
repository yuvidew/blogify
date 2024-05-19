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
        title : String,
        blogId : String
    }]
})

const userAccSchema = mongoose.model("userBlogs" , userSchema)

module.exports = userAccSchema