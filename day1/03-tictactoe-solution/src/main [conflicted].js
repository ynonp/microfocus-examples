import $ from 'jquery';

let turn = 0;
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ,' '];

function initBoard(game) {
  for (let i=0; i < 3; i++) {
    let row = document.createElement('div');
    for (let j=0; j < 3; j++) {
      const btn = document.createElement('button');
      btn.idx = (i * 3 + j);      
      row.appendChild(btn);
    }
    game.appendChild(row);
  }
}

function handleMove (ev) {
  const $btn = $(ev.target);
  // $btn.text(turn % 2 === 0 ? 'X' : 'O');

  if (turn % 2 === 0) {
    $btn.text('X');
  } else {
    $btn.text('O');
  }

  turn += 1;
}

$('#game').on('click', 'button', handleMove);
