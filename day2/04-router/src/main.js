import Clicker from 'clickercls';
import SyncText from 'synctext';
import Router from 'router';

const widgets = {
  clicker: Clicker,
  synctext: SyncText,
  router: Router,
};

window.router = new Router(document.querySelector('.widget'));

  /*
const nodes = document.querySelectorAll('.widget');
for (let i=0; i < nodes.length; i++) {
  const t = nodes[i].dataset.type;
  const c = new widgets[t](nodes[i]);
}
  */

