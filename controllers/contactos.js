const { RSA_NO_PADDING } = require('constants');
const path = require('path');
const Contacto = require('../models/contactos');

exports.index = function (req, res) {
    Contacto.find({}).exec(function (err, contactos) {
        if(err)
        {
            return res.send(500, err);
        }        
        console.log('entró y falta redireccionar');
        res.render('agenda/index', {contactos: contactos});
    });
};

exports.create = function (req, res) {
    var newContacto = new Contacto(req.body);
    console.log('req.body = '+req.body);
    newContacto.save(function (err){
        if(err)
        {
            res.status(400).send('Unable to save contact to database');
        }
        else
        {
            res.redirect('/agenda/getagenda');
        }
    });
    
};

exports.list = function (req, res) {
    Contacto.find({}).exec(function (err, contactos) {
        if (err) {
                return res.send(500, err);
        }
        res.render('agenda/getagenda', {contactos: contactos});
    });
};

exports.detail = function(req,res){
    let val_id = req.params.id;
    Contacto.findOne({_id:val_id},function(err,contactos){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            console.log(contactos);
            res.render('agenda/getone', {contactos: contactos});
        }
    });
};

exports.delete = function(req, res){
    let val_id = req.params.id;
    Contacto.deleteOne({_id:val_id}, function(err, contacto){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.redirect('/agenda/getagenda');
        }
    })
};

exports.edit = function(req, res){
    let val_id=req.params.id;
    Contacto.findById({_id: val_id}, function(err, contactos){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.render('agenda/edit', {contactos:contactos});
        }
    });
};

exports.update = function(req, res){
    let val_id= req.params.id;
    Contacto.updateOne({_id: val_id}, req.body, function(err, result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
            res.redirect('/agenda/getone/'+val_id);
        }
    });
};