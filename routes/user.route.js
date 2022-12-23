const { application } = require('express')
const express = require('express')
const router = express.Router()

router.get('/login',(req,res) => {
    res.render('user/login.html')
})

router.get('/logout', (req,res) => {
    res.send('/user/logout')
})

router.get('/join', (req,res) => {
    res.send('/user/join')
})

module.exports = router


