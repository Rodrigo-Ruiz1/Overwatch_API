'use strict';
const express = require('express');
const router = express.Router();
const HeroesModel = require('../models/HeroesModel');

router.get('/', async(req, res) => {
    const response = await HeroesModel.getAllHeroes();
    res.json(response[0]).status(200);
});

router.get('/:hero_name', async(req, res) => {
    const {hero_name} = req.params;
    const response = await HeroesModel.getHeroByHeroName(hero_name);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'})
    }
});

router.get('/id/:hero_id', async(req, res) => {
    const {hero_id} = req.params;
    const response = await HeroesModel.getHeroByHeroId(hero_id);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'})
    }
});

router.get('/role/:role', async(req, res) => {
    const {role} = req.params;
    const response = await HeroesModel.getHeroesByRole(role);
    if (response.length > 0) {
        res.json(response).status(200)
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

module.exports = router;