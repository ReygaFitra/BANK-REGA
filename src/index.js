const dotenv  = require('dotenv');
const express = require('express');

const app = express()

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Nasabah!')
})

const nasabahController = require('./controller/nasabah.controller')

app.use('/nasabah', nasabahController)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})