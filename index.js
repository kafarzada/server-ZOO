const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')

const animalRouter = require('./router/animal')
const cellRouter = require('./router/cell')

const app = express()
const PORT = 3000

express.urlencoded({ extended: false });
app.use(body_parser.json());
app.use(cors())

app.use('/animal', animalRouter)
app.use('/cell', cellRouter)

app.listen(PORT, () => {
    console.log('сервер запущен')
})