'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/images', (req, res) => {
	sr.get('images/json').then(res.json.bind(res));
});

router.get('/images/:id', (req, res) => {
	sr.get(`images/${req.params.id}/json`).then(res.json.bind(res));
});

router.get('/images/:id/history', (req, res) => {
	sr.get(`images/${req.params.id}/history`).then(res.json.bind(res));
});

module.exports = router;
