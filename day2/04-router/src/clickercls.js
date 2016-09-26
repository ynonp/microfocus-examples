export default class Clicker {
  constructor(el) {
    this.initDOM(el);
    this.valEl = el.querySelector('.val');
    this.btnEl = el.querySelector('button');
    this.val   = 0;

    // ALL event handlers SHOULD BE bound
    this.btnEl.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick (e) {
    this.val+=1;
    this.valEl.textContent = this.val;
  }

  initDOM (el) {
    el.innerHTML = `
    <p>
      Value: <span class="val">0</span>
      <button>Click Here</button>
    </p>
  `;
  }
}







