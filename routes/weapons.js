'use strict';
const express = require('express');
const router = express.Router();
const WeaponsModel = require('../models/WeaponsModel');

router.get('/', async(req, res) => {
    const response = await WeaponsModel.getAllWeapons();
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/:weapon_name', async(req, res) => {
    const {weapon_name} = req.params;
    const response = await WeaponsModel.getWeaponByName(weapon_name);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/id/:weapon_id', async(req, res) => {
    const {weapon_id} = req.params;
    const response = await WeaponsModel.getWeaponById(weapon_id);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

module.exports = router;