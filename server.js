const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const apiRouter = require('./server/routes/routes')

app.use('/api', apiRouter)

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("server is listening on PORT " + process.env.PORT)
})