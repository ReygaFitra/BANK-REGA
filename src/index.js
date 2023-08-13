const dotenv  = require('dotenv');
const express = require('express');

const app = express()

dotenv.config()

const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})