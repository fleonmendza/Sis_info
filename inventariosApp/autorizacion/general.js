var express = require('express');
const rutaAutorizada = express.Router();
var jwt = require('jsonwebtoken');

rutaAutorizada.use( (req , res , next )=>{
    var token= req.session.token;
    var clave = process.env.SECRETO || 'dios1234';
    if(token){
        jwt.verify(token,clave, (err, decoded)=>{
            if(err) res.json({mensaje:"token invaluido"});
            if(decoded) next();
        });
    }else{
        res.json({mensaje:"no token, realiza el proceso"});
    }
} );

module.exports = rutaAutorizada;