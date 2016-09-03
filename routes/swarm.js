'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/swarm', (req, res) => {
	sr.get('swarm').then(res.json.bind(res));
});

module.exports = router;