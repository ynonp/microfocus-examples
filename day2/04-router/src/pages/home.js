import counterStore from 'services/counter_service';

import Clicker from 'clicker';

export default class HomePage {
  constructor () {
    this.el = document.createElement('div');
  }

  prepare () {
    console.log('preparing...');
  }

  onLeave () {
    counterStore.saveCounterValue('home', this.clicker.val);
  }

  onEnter () {
    this.el.innerHTML = `
      <p>This is the home page</p>
      <a href="#about">About Page</a>
      <a href="#findyou">Find Page</a>
      <div class="clicker"></div>
    `;
    this.clicker = new Clicker(this.el.querySelector('.clicker'));
    this.clicker.setValue(counterStore.getCounterValue('home'));
  }
}


