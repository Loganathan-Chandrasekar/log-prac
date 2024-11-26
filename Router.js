const express=require('express');

const Router=express.Router();
const newv =require('./new')

Router.route('/:id')
        .get(newv.getAllUserId)
        .patch(newv.updateUser)
        .delete(newv.deleteUser);
Router.route('/')
        .get(newv.getAllUser)
        .post(newv.createUser);


 module.exports=Router;