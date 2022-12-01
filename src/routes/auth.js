const express = require('express');
const bcrypt = require('bcrypt');
const login = require('./../models/login');
/*const app = express();

const router =express.Router();
//autenticar usuario
app.post("/auth",(req,res)=>{
const{username,password}=  req.body;
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
