import Clicker from 'clicker';

export default class HomePage {
  constructor (el) {
    el.innerHTML = `
      <p>This is the home page</p>
      <a href="#about">About Page</a>
      <div class="clicker"></div>
    `;
    this.el = el;
    this.clicker = new Clicker(el.querySelector('.clicker'));
  }
}


