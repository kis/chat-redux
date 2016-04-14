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
		var username = document.getElementById('user-name').value;

		var exists = this.props.options.users ? this.props.options.users.find((el, i, arr) => {
			return username == this.props.options.userName;
		}) : false;

		if (exists) {
			
		}

		if (username && !exists) {
			api.join(username);
			document.getElementById('user-name').value = null;
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
				<div className="users-online">{this.props.options.usersCount} <span className="sup-text">users online</span></div>

				<div className={startStyle}>
					<input className="input-style" id="user-name" type="text" placeholder="Your Name" />
					<div className="error-style">Username already exists</div>
					<button className="" onClick={join}>Join</button>
				</div>
				<div className={endStyle}>
					<button onClick={disconnect}>Disconnect</button>
				</div>
			</div>
		);
	}
}