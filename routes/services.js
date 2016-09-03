'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/services', (req, res) => {
	sr.get('services').then(res.json.bind(res));
});

router.get('/services/:id', (req, res) => {
	sr.get(`services/${req.params.id}`).then(res.json.bind(res));
});

module.exports = router;
