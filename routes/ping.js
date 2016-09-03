'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/ping', (req, res) => {
	sr.get('_ping').then(res.json.bind(res));
});

module.exports = router;
