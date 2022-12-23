const db = require('./db')

exports.findOne = async({ where }) => {
    try {
        const payload = Object.entries(where)
            .map(([key,value]) => `${key}='${value}'`)
            .join(" and ")
        
        const sql = `SELECT * FROM user WHERE ${payload}`
        const [[result]] = await db.query(sql)
        console.log(result)
        return result
    } catch (e) {
        // throw new Error(e)
    }
}

const obj = {where : { user_id : 'Choihwoong', user_pw: '1429'}}
this.findOne(obj)