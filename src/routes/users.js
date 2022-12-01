const express=require('express');
const loginSchema = require('../models/login');
const userSchema = require('../models/user');

const router =express.Router();
//autenticar usuario
/*router.post("/users",(req,res)=>{
const{username,password}= loginSchema( req.body);
login.findOne({username},(err,login)=>{
    if(err){
        res.status(500).send('ERROR AL AUTENTICAR EL USUARIO');
    }else if(!login){
        res.status(500).send('ERROR EL USUARIO NO EXISTE');
    }else{
        login.CorredPassword(password,(err,result)=>{
            if(err){
                res.status(500).send('ERROR AL AUTENTICAR');
            }else if(result){
                res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
        }else{
            res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTO');  
        }
    })
    }
    })
});*/

// Registrar usuario
router.post("/users",(req,res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
    
});
//obtener datos
router.get("/users",(req,res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
    return data;
});
// Obtener usuario en especifico
router.get("/users/:id",(req,res)=>{
    const { id }= req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}))
})
//actualizar datos
router.put("/users/:id",(req,res)=>{
    const { id } = req.params;
    const {
        name, username ,password , email
    } = req.body;
    userSchema
    .updateOne({_id: id},{$set:{name,username,password,email}})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
});
//Eliminar datos
router.delete("/users/:id",(req,res)=>{
    const { id } = req.params;
    userSchema
    .remove({_id: id},)
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}))
});
module.exports = router;