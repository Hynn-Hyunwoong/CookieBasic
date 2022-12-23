const { application } = require('express')
const express = require('express')
const router = express.Router()
const user = require('./user.route')

router.get('/',(req,res) =>{
    res.render('index.html')
})

router.use('/user',user)

module.exports = router