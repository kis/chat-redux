import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

var chat = {
  usersCount: 0,
  userId: null,
  userName: null,
  users: []
};

function options(state = chat, action) {
  switch (action.type) {
    case 'NEW_CONNECTION':
    return {...state, usersCount: action.numUsers};

    case 'USER_DISCONNECTED':
    return {...state, usersCount: action.numUsers};

    case 'START_GAME':
    return {...state, started: true};

    case 'ADD_USER':
    var userId = Math.random()* (99 - 1) + 1;
    var users = [...state.users, {
      id: userId,
      username: action.username,
      messages: [{msg: action.userName + " is connected"}]
    }];
    return {...state, userId: userId,
                      userName: action.username,
                      users: users 
                    };

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