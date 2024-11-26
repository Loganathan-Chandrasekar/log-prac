const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {readFileSync} = require('fs');
const userdirroot = require('./NewConnect.js');
const UsersDir = require('./userData.json');
dotenv.config({path:'./config.env'});

// mongoose.connect(process.env.MONGODB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {console.log('Connect)')}).catch((err) => {console.log('Error connecting')});


//READ THE JSON DATA
const userDat=JSON.parse(readFileSync('./userData.json', 'utf8'));
console.log(userDat);
const deleteUser=async () => {
    try{
        await userdirroot.deleteMany(),
        console.log('Deleted user');
    }
    catch(err) {
        console.error('Error deleting user:', err.message);
    }
};

const importUser=async () => {
    try{
        await userdirroot.create(userDat),
        console.log('imported user');
    }
    catch(err) {
        console.error('Error deleting user:', err.message);
    }
    // process.exit();
};
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {console.log('Connect)')}).catch((err) => {console.log('Error connecting')});
  
// deleteUser();
// importUser();
console.log(process.argv)
if(process.argv[2]=='-import'){
    importUser();
}
if(process.argv[2]==='-delete'){
    deleteUser();
};
