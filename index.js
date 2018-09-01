const express = require("express")
const app=express()

require("./Routes/AuthRoutes")(app)

app.listen(4200)