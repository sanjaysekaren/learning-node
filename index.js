const express = require("express")
const app=express()

require("./Routes/AuthRoutes")(app)
require("./Routes/ValidateRoutes")(app)


app.listen(4200)