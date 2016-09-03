'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/nodes', (req, res) => {
	sr.get('nodes').then(res.json.bind(res));
});

router.get('/nodes/:id', (req, res) => {
	sr.get(`nodes/${req.params.id}`).then(res.json.bind(res));
});

module.exports = router;