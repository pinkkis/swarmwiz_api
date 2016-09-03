'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/containers', (req, res) => {
	sr.get('containers/json').then(res.json.bind(res));
});

router.get('/containers/:id', (req, res) => {
	sr.get(`containers/${req.params.id}/json`).then(res.json.bind(res));
});

module.exports = router;
