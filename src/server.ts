import express from 'express'

var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
require('dotenv').config()


app.listen(process.env.PORT || 3000, () => `server running on port ${process.env.PORT || 3000}`)