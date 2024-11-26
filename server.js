const env=require('dotenv'); 
const mongoose = require('mongoose');
env.config({ path : './config.env' });  
// console.log(process.env.NODE_ENV);
// console.log('PORT:', process.env.PORT);
// console.log(process.env);
mongoose.connect(process.env.MONGODB, {
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
    age: { type: Number, required: true },
      });


 const User = mongoose.model('Details', userSchema);
 const testie=new User({
    name: "Loganathan",
    email: "Loganathan@example.com",
    age: 30
  })


  testie.save()
  .then(doc=>{console.log(doc)})
  .catch(err=>{console.log("Error is "+err)});

  
const app=require('./index')
// console.log(app.get('env'));
app.listen(process.env.PORT || 3000,()=>{console.log('Server started...');});