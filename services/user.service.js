const userRepository = require('../repository/user.repository')

exports.getAccount = async ({user_id, user_pw}) => {
    // console.log(user_id, user_pw)
    const where = { user_id, user_pw}
    const user = await userRepository.findOne({where})
    return user
}

// const user_id = req.body.user_id
// const user_pw = req.body.user_pw
// this.getAccount()

const user_id = 'Choihwoong'
const user_pw = '1429'
this.getAccount({user_id, user_pw})