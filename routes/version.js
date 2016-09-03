'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/version', (req, res) => {
	sr.get('version').then(res.json.bind(res));
});

module.exports = router;
