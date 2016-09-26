import $ from 'jquery';

let isGameOver = false;

let turn = 0;
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ,' '];

function checkTriplet (x, y, z, player) {
  if ((board[x] === board[y]) &&
      (board[y] === board[z]) &&
      (board[z] === player)) {
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
  isGameOver = true;
}

initBoard(document.querySelector('#game'));

function handleMove (ev) {
  const idx = ev.target.idx;
  const $btn = $(ev.target);
  // $btn.text(turn % 2 === 0 ? 'X' : 'O');
  if ((board[idx] !== ' ') || isGameOver) {
    return;
  }
  const sign = (turn % 2 === 0) ? 'X' : 'O';

  board[idx] = sign;
  $btn.text(sign);
  if (checkWinner(sign)) {
    gameOver(sign);
  }

  console.log(board);
  turn += 1;
}

$('#game').on('click', '.cell', handleMove);
