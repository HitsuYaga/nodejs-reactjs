const database = require("../services/database")

module.exports = app => {
  app.post("/api/signup", (req, res) => {
      let email = req.body.email
      let password = req.body.password
      let data = {
        email: email,
        password: password
      }

      database.findByEmail(email).then((result) => {
        if (result) {
          return res.send({
            "error": "Email exist",
          })
        } else {
          database.createUser(data).then((newUser) => {
            if (newUser) {
              return res.send({
                "error": "",
                "token": "123456"
              });
            }
          })
        }
      })
    }),
    app.post("/api/login", (req, res) => {
      let email = req.body.email
      let password = req.body.password

      database.findUser(email, password).then((result) => {
        if (result) {
          return res.send({
            "error": "",
            "token": "123456"
          });
        } else {
          return res.send({
            "error": "Login fail. Please help to check your account"
          })
        }
      })
    })
}