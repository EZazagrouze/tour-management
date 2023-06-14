const express = require('express');
const { StatusCodes } = require('http-status-codes');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3004
const cors = require('cors')
const connectionDB = require('./connection/connection')






app.use(cors())
app.use(express.json())




const DB = async()=>{

    try{

        await connectionDB(process.env.mongo_url)

        app.listen({port}, ()=>{
            console.log(`Server is running on port ${port}`)
        })
    }

    catch(error){


        console.log(error)
    }
}

DB()


