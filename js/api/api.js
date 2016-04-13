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

getSocket().on('new user', (data) => {
	store.dispatch({
		type: 'ADD_USER', 
		userName: data.name, 
		roomTitle: data.room
	});
});

getSocket().on('new message', (data) => {
	store.dispatch({
		type: 'SEND_MESSAGE', 
		user: data.user, 
		message: data.msg
	});
});

export function join(name, room) {
	getSocket().emit('new user', {name: name, room: room});
}

export function newMessage(user, message) {
	getSocket().emit('new message', {user: user, msg: message});
}