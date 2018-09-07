const AuthController = require("../Controllers/AuthController")

module.exports = app => {
    app.get("/login",AuthController.login)
    app.get("/signup",AuthController.signup)
}
