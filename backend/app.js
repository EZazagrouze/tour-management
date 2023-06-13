const express = require('express');
const { StatusCodes } = require('http-status-codes');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001
const cors = require('cors')





app.use(cors())
app.use(express.json())
