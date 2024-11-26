const express=require('express');
const { readFileSync, writeFile } = require('fs');
let app=express();
let ai=JSON.parse(readFileSync('movies.json','utf-8'));

const viewMovie=(req,res)=>{
    res.status(200).json({status:"sucess",count:ai.length,data:{movies:ai}}
    )};

const movieId=(req,res)=>{
    const id=req.params.id*1;
    const movies=ai.find(el=>el.id===id);
    if(!movies){return res.status(404).json({
        status: "fail",
        message: 'this id number ='+id+' not founded'}
    )}
    res.json({status:"sucess",data:{movies:movies}});
};


 const createMovie= (req,res)=>{
    const newId=Number(ai[ai.length-1].id)+1;
    const newMovie=Object.assign({id:newId} ,req.body);
    ai.push(newMovie),
    writeFile('./movies.json',JSON.stringify(ai),(err)=>{
        res.status(201).json({status:'sucess',data:{movies:newMovie}})
    })
    console.log(newMovie)};


  const editMovie=(req,res)=>{
    let id=req.params.id*1;
    let movieToUpdate=ai.find(el=>el.id===id);
    if(!movieToUpdate){return res.status(404).json({
        status: "fail",
        message: 'this id number ='+id+' not founded'}
    )}
    let index=ai.indexOf(movieToUpdate);
    Object.assign(movieToUpdate,req.body);
    ai[index]=movieToUpdate;
    writeFile('./movies.json',JSON.stringify(ai),(err)=>{
        res.status(200).json({status:'sucess',data:{movies:movieToUpdate}})
    })
}
const deleteMovie=(req,res)=>{
    let id=req.params.id*1;
    let movieToDelete=ai.find(el=>el.id===id);
    if(!movieToDelete){return res.status(404).json({
        status: "fail",
        message: 'this id number ='+id+' not founded'}
    )}
    let index=ai.indexOf(movieToDelete);
    ai.splice(index,1);
    writeFile('./movies.json',JSON.stringify(ai),(err)=>{
        res.status(204).json({
            status:"sucess",
            data:{
                movie: null
            }})
    })
}
const Router=express.Router();

Router.route('/:id')
        .get(movieId)
        .patch(editMovie)
        .delete(deleteMovie);
Router.route('/')
        .get(viewMovie)
        .post(createMovie);
module.exports=Router;