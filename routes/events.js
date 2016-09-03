'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/events', (req, res) => {
	res.status(501).json({message: 'Event streams not yet supported'});
});

// app.get('/events', (req, res) => {
// 	request.get('http://unix:/var/run/docker.sock:/events', {headers: {host: 'http'}}, (e, r, b) => {
// 		res.end(b);
// 	});
// });

module.exports = router;