const { RSA_NO_PADDING } = require('constants');
const path = require('path');
const Login = require('../models/usuarios');


// Por mejorar (no funciona :'c)
exports.login = function(req, res){
    var email = req.body.email;
    var pass = req.body.password;
    console.log('email: '+email+" password: "+pass);

    Login.findOne({email:email},function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            console.log(result);
            res.json(result);
        }
    });
}