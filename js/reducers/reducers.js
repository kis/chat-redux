import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import Field from '../components/Logic/Field';

var game = {
  started: false,
  userName: null,
  roomId: null,
  roomTitle: null,
  rooms: []
};

function options(state = game, action) {
  switch (action.type) {
    case 'START_GAME':
    return {...state, started: true};

    case 'ADD_USER':
    var roomId = Math.random()* (99 - 1) + 1;
    var rooms = [...state.rooms, {
      id: roomId,
      title: action.roomTitle,
      messages: [{msg: action.userName + " is connected"}]
    }];
    return {...state, userName: action.userName,
                      roomId: roomId,  
                      roomTitle: action.roomTitle,
                      rooms: rooms 
                    };

    case 'END_GAME':
    return {...state, started: false};

    case 'SEND_MESSAGE':
    var rooms = state.rooms.map((el, i, arr) => {
      return el.id == state.roomId ? 
            {...el, messages: [...el.messages, {user: action.user, msg: action.message}]} : 
            el;
    });
    return {...state, rooms: rooms};

    default:
    return {...state};
  }
}

var fieldInit = new Field();

function field(state = fieldInit, action) {
  switch (action.type) {
    case 'GET_FIELD':
    return {...state};

    case 'MOVE_FIGURE_TO_CELL':
    return {...state, data: action.field.data, black: !action.field.black};

    case 'MOVE_FIGURE_BACK':
    return {...state, data: action.oldField.data};

    default:
    return {...state};
  }
}

const chessApp = combineReducers({
  options,
  field
});

export default chessApp;