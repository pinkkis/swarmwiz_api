'use strict';

const request = require('request');
const settings = require('./settings');

let socketGet = (path) => {
	let url = `http://unix:${settings.socket}:/${path}`;
	let headers = {headers: {host: 'http'}};

	let deferred = new Promise((resolve, reject) => {
		request.get(url, headers, (err, result, body) => {
			if (err) return reject(err);
			let response = null;
			try {
				response = JSON.parse(body);
			} catch (e) {
				response = body;
			}

			resolve(response);
		});
	});

	return deferred;
};

module.exports = {
	get: socketGet
};