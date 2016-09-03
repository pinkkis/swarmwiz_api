'use strict';

const express = require('express');
const sr = require('../modules/socketRequest');

const router = express.Router();

router.get('/tasks', (req, res) => {
	sr.get('tasks').then(res.json.bind(res));
});

router.get('/tasks/:id', (req, res) => {
	sr.get(`tasks/${req.params.id}`).then(res.json.bind(res));
});

module.exports = router;
