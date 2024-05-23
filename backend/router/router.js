const express = require('express')
const { signUp, signIn } = require('../controller/authentication')
const { getBlogsByUserId , createBlog, deleteBlog, getUpdateBlogById, getBlogById } = require('../controller/Blog.controller')
const router = express.Router()

/** they two routes for user sign in and sign up  */

router.post('/post/signup' , signUp)
router.post('/post/signin' , signIn)

/**this routes for create and get the blogs of users */

router.post('/post/createBlog' , createBlog)
router.get('/get/blogs/:userId' , getBlogsByUserId)
router.delete('/delete/blogs/:id' , deleteBlog)
router.get('/get/blog/:id' , getBlogById)
router.patch("/patch/blog/:id" ,getUpdateBlogById)



module.exports = router