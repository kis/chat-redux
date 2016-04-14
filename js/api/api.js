import io from 'socket.io-client';

import * as actions from '../actions/actions';

import store from '../store/store';

var socket = null;

const locally = 'http://localhost:8080';
const heroku = 'https://evening-basin-88080.herokuapp.com';

var host = (window.location.hostname.indexOf('localhost') !== -1) ? locally : heroku;

function getSocket() {
	if (!socket) {
		socket = io.connect(host);
	}
	return socket;
}

getSocket().on('new connection', (data) => {
	store.dispatch(actions.newConnection(data.numUsers));
});

getSocket().on('user disconnected', (data) => {
	store.dispatch(actions.userDisconnected(data.numUsers));
});

getSocket().on('new user', (data) => {
	store.dispatch(actions.addUser(data.username));
});

getSocket().on('new message', (data) => {
	store.dispatch(actions.sendMessage(data.user, data.msg));
});

export function join(username) {
	getSocket().emit('new user', {username: username});
}

export function newMessage(user, message) {
	getSocket().emit('new message', {user: user, msg: message});
}