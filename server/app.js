module.exports = movies => {
    Movies }

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

require("./routes/routes.js")(app)


app.listen(5000, ()  => { 
    console.log('Bem vindo ao servidor: localhost:5000')
})
   