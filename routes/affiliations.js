'use strict';
const express = require('express');
const router = express.Router();
const AffiliationsModel = require('../models/AffiliationsModel');

router.get('/', async(req, res) => {
    const response = await AffiliationsModel.getAllAffiliations();
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/:affiliation_name', async(req, res) => {
    const {affiliation_name} = req.params;
    const response = await AffiliationsModel.getAffiliationByName(affiliation_name);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

router.get('/id/:affiliation_id', async(req, res) => {
    const {affiliation_id} = req.params;
    const response = await AffiliationsModel.getAffiliationById(affiliation_id);
    if (response.length > 0) {
        res.json(response[0]).status(200);
    } else {
        res.status(404).json({error : 'No Results Found'});
    }
});

module.exports = router;