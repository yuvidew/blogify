const BlogsSchema = require("../model/blogs.model");
const userAccSchema = require("../model/userInfo.model");

const createBlog = async(req , res) => {
    const {title , category , id} = req.body;

    try {
        const result = await BlogsSchema.create({
            title : title,
            category : category,
            userId : id,
            date : new Date(),
            description : JSON.stringify(
                [{
                    id: "f42e30b0-7d98-4fe8-bac8-6a5dc24a9fbc",
                    type: "paragraph",
                    props: {
                        textColor: "default",
                        backgroundColor: "default",
                        textAlignment: "left"
                    },
                    content: [],
                    children: []
                }]
            ) 
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
        msg : "Blog is successfully deleted!",
        ans : result
    })
}

const getBlog = async (req , res) => {
    const result = await BlogsSchema.find()

    return res.status(200).json(result)
}

module.exports = {
    createBlog,
    getBlogsByUserId,
    deleteBlog,
    getBlogById,
    getUpdateBlogById,
    getBlog
}