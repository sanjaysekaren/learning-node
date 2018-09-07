const ValidateController = require("../Controllers/ValidateContrller")

module.exports = app =>{
    app.get("/validate",ValidateController.validate_length)
}