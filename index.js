const express = require('express');
const request = require('request');
const morgan = require('morgan');

let app = express();

app.use(morgan('tiny'));

app.get('/info', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/info', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/images', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/images/json', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/containers', (req, res) => {
	request.get(`http://unix:/var/run/docker.sock:/containers/json`, {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/containers/:id', (req, res) => {
	request.get(`http://unix:/var/run/docker.sock:/containers/${req.params.id}/json`, {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/services', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/services', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/networks', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/networks', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

// app.get('/events', (req, res) => {
// 	request.get('http://unix:/var/run/docker.sock:/events', {headers: {host: 'http'}}, (e, r, b) => {
// 		res.end(b);
// 	});
// });

app.get('/nodes', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/nodes', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/swarm', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/swarm', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.get('/tasks', (req, res) => {
	request.get('http://unix:/var/run/docker.sock:/tasks', {headers: {host: 'http'}}, (e, r, b) => {
		res.end(b);
	});
});

app.listen(3333, function() {
	console.log('App listening on port 3333!');
});

process.on('SIGTERM', () => {
	app.close();
});