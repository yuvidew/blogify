const express = require('express')
const { signUp, signIn, getFindUser } = require('../controller/authentication')
const { getBlogsByUserId , createBlog, deleteBlog, getUpdateBlogById, getBlogById, getBlog, getBlogLikeDisLike, addCommitPost, getCommit } = require('../controller/Blog.controller')
const router = express.Router()

/** they two routes for user sign in and sign up  */

router.post('/post/signup' , signUp)
router.post('/post/signin' , signIn)
router.get("/get/user/:id" , getFindUser)

/**this routes for create and get the blogs of users */

router.post('/post/createBlog' , createBlog)
router.get('/get/blogs/:userId' , getBlogsByUserId)
router.delete('/delete/blogs/:userId' , deleteBlog)
router.get('/get/blog/:id' , getBlogById)
router.patch("/patch/blog/:id" ,getUpdateBlogById)
router.get('/get/blogs/' , getBlog)
router.post('/post/blog/opinion/:id' , getBlogLikeDisLike)
router.post('/post/blog/commit/:id' , addCommitPost)
router.get('/get/blog/commit/:id' , getCommit)


module.exports = router