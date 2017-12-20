const db = require("../db")
const User = db.user

module.exports = {
  findByEmail: function (email) {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          email: email
        }
      }).then((result) => {
        return resolve(result)
      })
    })
  },
  findUser: function (email, password) {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          email: email,
          password: password
        }
      }).then((result) => {
        return resolve(result)
      })
    })
  },
  createUser: function (user_info) {
    return new Promise((resolve, reject) => {
      User.create(user_info).then((newUser) => {
        return resolve(newUser)
      })
    })
  }
}