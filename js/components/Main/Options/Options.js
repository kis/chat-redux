import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import * as api from '../../../api/api';

import './options.css';

const FIGURES = {
	black: 'Black',
	white: 'White'
};

export default class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	start() {
		var name = document.getElementById('user-name').value;
		var room = document.getElementById('room').value;
		if (name && room) {
			// this.props.actions.startGame(name, room);
			api.startGame(name, room);
		}
	}

	end() {
		this.props.actions.endGame();
	}

	render() {
		var figure = this.props.field.black ? FIGURES.black : FIGURES.white;

		var movingStyle = this.props.options.started ? 'moving-style' : 'moving-style hidden';
		var startStyle = !this.props.options.started ? 'button-style' : 'button-style hidden';
		var endStyle = this.props.options.started ? 'button-style' : 'button-style hidden';

		var start = this.start.bind(this);
		var end = this.end.bind(this);

		return (
			<div className="chess-options">
				<div className="tabs">
					<Link to="/chess" activeClassName="tab-active">Chess</Link>
					<Link to="/chat" activeClassName="tab-active">Chat</Link>
				</div>

				<div className={startStyle}>
					<input className="input-style" id="user-name" type="text" placeholder="Your Name" /><br/><br/>
					<input className="input-style" id="room" type="text" placeholder="Room" /><br/><br/>
					<button onClick={start}>Start game</button>
				</div>
				<div className={endStyle}>
					<button onClick={end}>End game</button>
				</div>
				<div className={movingStyle}>{figure} is moving</div>
			</div>
		);
	}
}