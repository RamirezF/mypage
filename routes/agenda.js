const express = require('express');
const router = express.Router();
const path = require('path');
//const model = require('../models/contactos');
const contactos = require('../controllers/contactos');

router.get('/', function(req, res){
    res.render('agenda');
});

router.get('/create', function(req, res){
    res.sendFile(path.resolve('views/agenda/create.html'));
});

router.post('/addcontacto', function(req, res){
    contactos.create(req,res);
});

router.get('/getagenda', function(req, res){
    contactos.list(req, res);
});

// Por mejorar
router.get('/getone/:id', function(req, res){
    contactos.detail(req, res);
});

router.get('/delete/:id', function(req,res){
    console.log(req.params);
    contactos.delete(req, res);
});

router.get('/edit/:id', function(req, res){
    contactos.edit(req, res);
});

router.post('/:id', function(req, res){
    console.log('entró a post para editar');
    contactos.update(req,res);
})

module.exports = router;