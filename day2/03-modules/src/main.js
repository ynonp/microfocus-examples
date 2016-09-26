import Clicker from 'clickercls';

const clickers = document.querySelectorAll('.clicker');
for (let i=0; i < clickers.length; i++) {
  const c = new Clicker(clickers[i]);
}

