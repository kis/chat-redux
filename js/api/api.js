import * as actions from '../actions/actions';

import io from 'socket.io-client';

import store from '../store/store';

var socket = null;

var host = (window.location.hostname.indexOf('localhost') !== -1) ? 
			'http://localhost:8080' : 
			'https://evening-basin-88080.herokuapp.com';

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

getSocket().on('new move', (data) => {
	store.dispatch({
	    type: 'MOVE_FIGURE_TO_CELL',
	    field: data
	});
});

export function startGame(name, room) {
	getSocket().emit('new user', {name: name, room: room});
}

export function newMessage(user, message) {
	getSocket().emit('new message', {user: user, msg: message});
}

export function newMove(obj) {
	getSocket().emit('new move', obj);
}