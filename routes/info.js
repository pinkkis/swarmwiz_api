'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');
const infoQuery = require('../modules/infoQuery');

const router = express.Router();

router.get('/info', (req, res) => {
	infoQuery().then(res.json.bind(res));
});

module.exports = router;
