import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

var chat = {
  started: false,
  userName: null,
  roomId: null,
  roomTitle: null,
  rooms: []
};

function options(state = chat, action) {
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

    case 'DISCONNECT':
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

const chatApp = combineReducers({
  options
});

export default chatApp;