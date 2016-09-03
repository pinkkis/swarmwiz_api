'use strict';

const sr = require('./socketRequest');
const settings = require('./settings');

let infoQuery = () => {
	return sr.get('info')
		.then((r) => {
			settings.updateCurrentNode(r);
			return r;
		});
};

module.exports = infoQuery;
