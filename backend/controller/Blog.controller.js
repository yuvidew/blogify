const BlogsSchema = require("../model/blogs.model");
const userAccSchema = require("../model/userInfo.model");

const createBlog = async(req , res) => {
    const {title , category , id} = req.body;

    try {
        const result = await BlogsSchema.create({
            title : title,
            category : category,
            userId : id,
            description : JSON.stringify("{}")
        })
        const userResult = await userAccSchema.findById(id)
        userResult.blogs.push({
            title : title,
            blogId : result._id
        })
        userResult.save()
        return res.status(201).json({ msg: 'Your blog is successfully created!' })
    } catch (error) {
        return res.status(500).json({ msg: 'Server Error' });
    }
}


const getBlogsByUserId = async (req , res) => {
    const {userId} = req.params;

    const result = await BlogsSchema.find({
        userId
    })
    return res.status(200).json(result)
}


const getUpdateBlogById = async (req , res) => {
    const {id} = req.params;
    const result = await BlogsSchema.findByIdAndUpdate(id ,  req.body , {new : true})
    return res.status(200).json(result)
}

const getBlogById = async (req , res) => {
    const {id} = req.params;
    const result = await BlogsSchema.findById(id)
    return res.status(200).json(result)
}
const deleteBlog = async (req , res) => {
    const {userId} = req.params;
    const result = await BlogsSchema.deleteOne({
        userId : userId
    })
    return res.status(201).json({
        msg : "Blog is successfully deleted!"
    })
}

module.exports = {
    createBlog,
    getBlogsByUserId,
    deleteBlog,
    getBlogById,
    getUpdateBlogById
}