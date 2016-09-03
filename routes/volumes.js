'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/volumes', (req, res) => {
	sr.get('volumes').then(res.json.bind(res));
});

router.get('/volumes/:id', (req, res) => {
	sr.get(`volumes/${req.params.id}`).then(res.json.bind(res));
});

module.exports = router;
