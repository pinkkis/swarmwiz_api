'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');
const settings = require('../modules/settings');

const router = express.Router();

router.get('/swarm', (req, res) => {
	if (settings.isSwarmManager) {
		sr.get('swarm').then(res.json.bind(res));
	} else {
		// TODO: rename socketRequest and get method and add normal request get for proxy
		// sr.pipeRequest(req.url).pipe(res);
	}
});

module.exports = router;