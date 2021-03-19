var jwt = require('jsonwebtoken');

var payload={
    usedata:{'email': 'jeo@doe.com', 'phone': '55654871254', 'perfil': 'user'}
};

const clave = "dios1234";

const token = jwt.sing(payload, clave , {expiresIn: 60*5});

console.log(token);