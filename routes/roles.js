'use strict';
const express = require('express');
const router = express.Router();
const RolesModel = require('../models/RolesModel');

router.get('/', async(req, res) => {
    const response = await RolesModel.getAllRoles();
    if (response !== undefined) {
        res.json(response[0]).status(200);
    } else {
        res.status(404);
    }
});

router.get('/id/:role_id', async(req, res) => {
    const {role_id} = req.params;
    const response = await RolesModel.getRoleById(role_id);
    if (response !== undefined) {
        res.json(response[0]).status(200);
    } else {
        res.status(404);
    }
});

router.get('/:role_name', async(req, res) => {
    const {role_name} = req.params;
    const response = await RolesModel.getRoleByName(role_name);
    if (response !== undefined) {
        res.json(response[0]).status(200);
    } else {
        res.status(404);
    }
});

module.exports = router;