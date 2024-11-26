const env=require('dotenv'); 
env.config({ path : './config.env' });  
const mongoose = require('mongoose');

// console.log(process.env.NODE_ENV);
// console.log('PORT:', process.env.PORT);
// console.log(process.env);

mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => {
      console.log(conn);
      console.log('Connected to MongoDB!');
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err);
    });


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
      });

      console.log("version:_______________"+mongoose.version);
const User = mongoose.model('details', userSchema);
 
  module.exports= User;