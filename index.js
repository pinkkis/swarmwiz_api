const express = require('express');
const request = require('request');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const settings = require('./modules/settings');
const infoQuery = require('./modules/infoQuery');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

/**
 * startup
 * get node info
 */

infoQuery();

/**
 * routes
 */

app.use('/api', require('./routes/info'));
app.use('/api', require('./routes/version'));
app.use('/api', require('./routes/ping'));
app.use('/api', require('./routes/volumes'));
app.use('/api', require('./routes/containers'));
app.use('/api', require('./routes/images'));
app.use('/api', require('./routes/networks'));
app.use('/api', require('./routes/events'));
app.use('/api', require('./routes/swarm'));
app.use('/api', require('./routes/services'));
app.use('/api', require('./routes/tasks'));
app.use('/api', require('./routes/nodes'));

app.get('/', (req, res) => res.json({message: 'running...'}));

app.get('*', (req, res) => res.status(404).json({message: 'not found'}));
app.post('*', (req, res) => res.status(404).json({message: 'not found'}));
app.put('*', (req, res) => res.status(404).json({message: 'not found'}));
app.delete('*', (req, res) => res.status(404).json({message: 'not found'}));

/**
 * set up process listeners
 */
process.on('SIGINT', () => {
	process.exit(0);
});
process.on('SIGTERM', () => {
	process.exit(0);
});
process.on('uncaughtException', (err) => {
  console.error('uncaughtException: ' + err.message);
  console.error(err.stack);
  process.exit(1);
});

/**
 * start listening
 */
app.listen(settings.apiPort, () => {
	console.log(`Swarmwiz api listening on port ${settings.apiPort}...`);
});
