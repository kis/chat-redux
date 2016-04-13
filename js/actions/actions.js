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