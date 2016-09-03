'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/networks', (req, res) => {
	sr.get('networks').then(res.json.bind(res));
});

router.get('/networks/:id', (req, res) => {
	sr.get(`networks/${req.params.id}`).then(res.json.bind(res));
});

module.exports = router;
