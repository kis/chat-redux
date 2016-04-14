import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import * as api from '../../api/api';

import './options.css';

export default class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	join() {
		var name = document.getElementById('user-name').value;
		var room = document.getElementById('room').value;

		var exists = this.props.options.rooms ? this.props.options.rooms.find((el, i, arr) => {
			return room == this.props.options.roomTitle;
		}) : false;

		if (name && room && !exists) {
			api.join(name, room);
			document.getElementById('user-name').value = null;
			document.getElementById('room').value = null;
		}
	}

	disconnect() {
		this.props.actions.endGame();
	}

	render() {
		var movingStyle = this.props.options.started ? 'moving-style' : 'moving-style hidden';
		var startStyle = !this.props.options.started ? 'button-style' : 'button-style hidden';
		var endStyle = this.props.options.started ? 'button-style' : 'button-style hidden';

		var join = this.join.bind(this);
		var disconnect = this.disconnect.bind(this);

		return (
			<div className="options">
				<div className="users-online">{this.props.options.userCount} <span className="sup-text">users online</span></div>

				<div className={startStyle}>
					<input className="input-style" id="user-name" type="text" placeholder="Your Name" /><br/><br/>
					<input className="input-style" id="room" type="text" placeholder="Room" /><br/><br/>
					<button onClick={join}>Join</button>
				</div>
				<div className={endStyle}>
					<button onClick={disconnect}>Disconnect</button>
				</div>
			</div>
		);
	}
}