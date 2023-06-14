const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')




const userschema = new mongoose.Schema(
  {

    username: {

      type: String,
      required:[true, 'name of the user must be provided'],
      minlength: 3,
      maxlength: 25,
      unique: true,

    },

    email: {

      type: String,
      required:[true, 'email must be provided'],
      match:[
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email',
         
         ], 

     unique:true
      

    },


    password: {

      type: String,
      required:[true, 'password must be provided'],
      minlength:5
    }

  },

  { timestamps: true }
);



userschema.pre('save', async function(){

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userschema.methods.checkpwd = async function(candidatePassword){

  const ismatch = await bcrypt.compare(candidatePassword, this.password)

  return ismatch


}








module.exports = mongoose.model('user', userschema);





