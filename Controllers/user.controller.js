const userService = require("../services/user.service")

exports.getLogin = (req,res,next) => {
    res.render('user/login.html')
}

exports.postLogin = async (req,res,next) => {
    const {user_id, user_pw} = req.body
    const user = await userService.getAccount({user_id, user_pw})

    if(user === undefined) return next(new Error('Incorrect Your Account or Password'))

    res.setHeader('Set-Cookie',`token=${user.user_name}; path=/;`)
    res.redirect("/")
}

exports.logout = (req,res,next) => {
    res.setHeader('Set-Cookie',`token=; path=/;`)
    res.redirect("/")
}