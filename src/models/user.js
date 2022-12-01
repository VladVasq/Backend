const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        validate: {
          validator: (v) => /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(v),
          message: 'Digite nombre y apellido correctamente',
        },
        required: [true, 'Nombre y Apellidos Requerido'],
      },
    username:{
        type: String,
        required: true,
        unique: true
    }, 
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
          validator: (v) => /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(v),
          message: 'Email Invalido',
        },
        required: [true, ' email Requerido'],
      },
    
    }, { timestamps: true });


userSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password') ){
        const document = this;
        bcrypt.hash(document.password,saltRounds,(err,hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password=hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

userSchema.method.CorredPassword = function(password,callback){
    bcrypt.compare(password,this.password, function(err,same){
        if(err){
            callback(err);
            }else{
                callback(err,same);
            }
    });
}

module.exports= mongoose.model('user',userSchema);  