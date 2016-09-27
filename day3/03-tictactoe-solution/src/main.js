import $ from 'jquery';

const socket = io.connect('https://socket-magic.herokuapp.com/');
socket.on('data', receiveNewState);

let state = {
  gameId: 'ynon',
  isGameOver: false,
  turn: 0,
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ,' '],
};

function receiveNewState (newState) {
  if (newState.gameId !== 'ynon') {
    return;
  }
  state = newState;
  render();
  const sign = (state.turn % 2 === 0) ? 'X' : 'O';

  if (checkWinner(sign)) {
    gameOver(sign);
  }
}

function sendStateOverTheWire (state) {
  socket.emit('data', state);
}

function render () {
  const g = document.querySelector('#game');
  g.innerHTML = '';
  initBoard(g);
}

function checkTriplet (x, y, z, player) {
  if ((state.board[x] === state.board[y]) &&
      (state.board[y] === state.board[z]) &&
      (state.board[z] === player)) {
    return true;
  }
  return false;
}

function initBoard (game) {
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
      const btn = document.createElement('div');
      btn.classList.add('cell');
      btn.idx = (i * 3 + j);
      btn.textContent = state.board[btn.idx];
      row.appendChild(btn);
    }
    game.appendChild(row);
  }
}

function checkWinner(sign) {
  return checkTriplet(0, 1, 2, sign) ||
    checkTriplet(3, 4, 5, sign) ||
    checkTriplet(6, 7, 8, sign) ||
    checkTriplet(0, 3, 6, sign) ||
    checkTriplet(1, 4, 7, sign) ||
    checkTriplet(2, 5, 8, sign) ||
    checkTriplet(0, 4, 8, sign) ||
    checkTriplet(2, 4, 6, sign);
}

function gameOver(sign) {
  $('#status').text(`Game Over ${sign} won`);
  state.isGameOver = true;
}

initBoard(document.querySelector('#game'));

function handleMove (ev) {
  const newState = {
    gameId: 'ynon',
    isGameOver: state.isGameOver,
    turn: state.turn,
    board: [...state.board]
  };

  const idx = ev.target.idx;
  const $btn = $(ev.target);

  if ((state.board[idx] !== ' ') || state.isGameOver) {
    return;
  }
  const sign = (state.turn % 2 === 1) ? 'X' : 'O';

  newState.board[idx] = sign;
  newState.turn += 1;
  sendStateOverTheWire(newState);
}

$('#game').on('click', '.cell', handleMove);
