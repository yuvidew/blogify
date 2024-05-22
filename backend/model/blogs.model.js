const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String
    },
    date : {
        type : String
    },
    category : {
        type : String,
    },
    description : String,
    like : {
        type :Number,
    },
    dislike : {
        type : Number
    },
    comment : [{
        email : String,
        text : String,
    }],
    userId : {
        type : String
    }
})

const BlogsSchema = mongoose.model("blogs" , blogSchema)

module.exports = BlogsSchema