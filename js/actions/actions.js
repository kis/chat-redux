export function newConnection(numUsers) {
  return {
    type: 'NEW_CONNECTION',
    numUsers: numUsers
  }
}

export function userDisconnected(numUsers) {
  return {
    type: 'USER_DISCONNECTED',
    numUsers: numUsers
  }
}

export function addUser(username) {
  return {
    type: 'ADD_USER',
    username: username
  }
}

export function startGame(userName, roomTitle) {
  return {
    type: 'START_GAME',
    userName: userName,
    roomTitle: roomTitle
  }
}

export function endGame() {
  return {
    type: 'END_GAME'
  }
}

export function sendMessage(user, message) {
  return {
    type: 'SEND_MESSAGE',
    user: user,
    message: message
  }
}