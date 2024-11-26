const express=require('express')
let app=express();
app.use(express.json());
const User=require('./NewConnect');


// exports.getAllUser=async (req,res)=>{
//     try{
//     const createii= await Usegr.find();
//     res.status(200).json({
//         status:'success',
//         data:{user:createii}
//     }); 
// }catch(err){
//     res.status(404).json({
//     status:"fail",
//     message:err.message
// })};
// };
exports.getAllUser = async (req, res) => {
    try {
        let queryObj = { ...req.query };
        // const sort = queryObj.sort;
        console.log(queryObj);
        delete queryObj.sort;
        delete queryObj.fields
        console.log(queryObj);

        let queryStr = JSON.stringify(queryObj);
        console.log(queryStr);

        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        console.log(queryStr);

        let queryObj2 = JSON.parse(queryStr);
        let queryn = User.find(queryObj2);

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queryn.sort(sortBy);
            console.log("this is:"+queryn);
        }

        if(req.query.fields){
        const fields = req.query.fields.split(',').join(' ');
        queryn.select(fields);
        console.log("this is:"+queryn);
    }

        const users = await queryn;
        // console.log("Query Object:", queryObj2);  
        // console.log("Sort applied:", req.query.sort);

        res.status(200).json({
            status: 'success',
            length: users.length,
            data: users 
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};




exports.getAllUserId=async (req,res)=>{
    try{
    const createii= await User.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{user:createii}
    }); 
}catch(err){
    res.status(400).json({
    status:"fail",
    message:err.message
})};};


exports.createUser= async (req,res)=>{
    try{
        const createi= await User.create(req.body);
        res.status(201).json({
            status:'success',
            data:{user:createi}
        }); 
    }catch(err){ 
        res.status(404).json({
        status:"fail",
        message:err.message
    })};
}

exports.updateUser=async (req,res)=>{
    try{
    const updatedUser= await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    res.status(200).json({
        status:'success',
        data:{user:updatedUser}
    }); 
}catch(err){ 
    res.status(404).json({
    status:"fail",
    message:err.message
})};};

// exports.postUser= (req,res)=>{};


exports.deleteUser=async (req,res)=>{try{
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status:'success',
        data:{user:null}
    }); 
}catch(err){
    res.status(404).json({
    status:"fail",
    message:err.message
})};};
