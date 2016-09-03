'use strict';

let settings = {
	socket: process.env.SOCK || '/var/run/docker.sock',
	apiPort: process.env.PORT || 3333,
	currentNodeInfo : null,

	get isInSwarm () {
		return settings.currentNodeInfo && settings.currentNodeInfo.Swarm.NodeID.length > 0;
	},
	get isSwarmManager () {
		return settings.isInSwarm && settings.currentNodeInfo.Swarm.ControlAvailable;
	},
	updateCurrentNode: (info) => {
		if (info !== 'undefined') {
			settings.currentNodeInfo = info;
		}
	}
};

module.exports = settings;