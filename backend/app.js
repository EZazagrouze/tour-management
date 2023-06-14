const express = require('express');
const { StatusCodes } = require('http-status-codes');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3004
const cors = require('cors')
const connectionDB = require('./connection/connection')
const authroute = require('./routes/auth')




// other middlewares



app.use(cors())
app.use(express.json())
app.use('/api/auth', authroute)






// error middleware


app.use((err, req, res, next)=>{

    const errorstatus = err.status || StatusCodes.INTERNAL_SERVER_ERROR
    const errormessage = err.message || 'something went wrong'
    return res.status(errorstatus).json({

        success:false,
        status:errorstatus,
        message:errormessage,
        stack:err.stack
    })



})




// connection to DB


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


