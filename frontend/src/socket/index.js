import openSocket from 'socket.io-client';
import constants from '../constants';

const socket = openSocket(constants.API.ROOT);

function subscribeToUpdateParticipations (cb) {
	socket.on('updateParticipations', timestamp => cb(null, timestamp));
}

export { subscribeToUpdateParticipations };
