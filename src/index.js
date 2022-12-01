const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const userRouters = require("./routes/users");
const orderRouters = require("./routes/orders");
const loginSchema = require("./routes/auth")

const app = express();
const port= process.env.PORT || 9000;
//routes
app.listen(port,() =>{ 
    console.log("server listening on port", port);
})
app.get("/",(req,res) =>{
    res.send()
});
//CONEXION A LA BASE DE DATOS
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conexion a la base de datos exitosa"))
.catch((error)=> console.error(error ))

app.use(express.json());

app.use('/api',userRouters,orderRouters);
//app.use('/api',loginSchema)
//app.use('/api',orderRouters);

