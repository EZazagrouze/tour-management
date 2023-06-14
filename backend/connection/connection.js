const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connectionDB = (url)=>{

    return mongoose.connect(url)
    
}


module.exports = connectionDB