var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', (req, res) => {
    res.send('Hello User, your profile.');
});


router.post('/', async (req, res) => {
    var dream = db.Dream;
    dream = req.body;
    console.log(dream);
    try {
        
        if(!dream.description)
            return res.status(400).send({error: 'Description is required', status: false});

        
        var retorno = await db.Dream.create(dream);
        
    } catch (err) {
        res.status(400).send({error:err, status: false});
    }


    res.send({dream: retorno, status: true});
});


router.get('/unique/:dream_id', async (req, res) => {
    const { dream_id } = req.params;

    try {
        
        var retorno = await db.Dream.findOne({ where: { id: dream_id}});
        
    } catch (err) {
        res.status(400).send({error:err, status: false});
    }

    res.send({dream: retorno, status: true});
});

router.get('/all', async (req, res) => {
    try {  
        var retorno = await db.Dream.findAll({ order: [['created_at', 'desc']], limit: 100});     
    } catch (err) {
        res.status(400).send({error:err, status: false});
    }

    res.send({dream: retorno, status: true});
});

module.exports = app => app.use('/dream', router);

// http:8080/localhost/profile -> post