const express = require('express')
const { signUp, signIn } = require('../controller/authentication')
const router = express.Router()

router.post('/post/signup' , signUp)
router.post('/post/signin' , signIn)

module.exports = router