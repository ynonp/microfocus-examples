const myBtn = document.querySelector('#btnSecret');
const panel = document.querySelector('#secret');
const form = document.querySelector('form');
const game = document.querySelector('.game');

function incValue (ev) {
  if (ev.target.classList.contains('game')) {
    return;
  }

  const btn = ev.target;
  const val = btn.textContent;
  btn.textContent = Number(val) + 1;
}

game.addEventListener('click', incValue);

/*

function onSearch (ev) {
  alert('Searching...');
  ev.preventDefault();
}

form.addEventListener('submit', onSearch);

function revealSecret () {
  panel.textContent = 'ninja';
}

myBtn.addEventListener('click', revealSecret);

*/
