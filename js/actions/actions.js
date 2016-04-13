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

export function initField() {
  return {
    type: 'INIT_FIELD'
  }
}

export function getField() {
  return {
    type: 'GET_FIELD'
  }
}

export function moveFigureToCell(field) {
  return {
    type: 'MOVE_FIGURE_TO_CELL',
    field: field
  }
}

export function moveFigureBack(oldField) {
  return {
    type: 'MOVE_FIGURE_BACK',
    oldField: oldField
  }
}