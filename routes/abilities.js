'use strict';
const express = require('express');
const router = express.Router();
const AbilitiesModel = require('../models/AbilitiesModel');

router.get('/', async(req, res) => {
    const response = await AbilitiesModel.getAllAbilities();
    if (response.length > 0) {
        res.json(response[0]).status(200)
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/id/:ability_id', async(req, res) => {
    const {ability_id} = req.params;
    const response = await AbilitiesModel.getAbilityById(ability_id);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/:ability_name', async(req, res) => {
    const {ability_name} = req.params;
    const response = await AbilitiesModel.getAbilityByName(ability_name);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

module.exports = router;