function Clicker(el) {
  el.innerHTML = `
    <p>
      Value: <span class="val">0</span>
      <button>Click Here</button>
    </p>
  `;
  this.valEl = el.querySelector('.val');
  this.btnEl = el.querySelector('button');
  this.val   = 0;

  this._pleaseDontTouch = 5;

  // ALL event handlers SHOULD BE bound
  this.btnEl.addEventListener('click', this.handleClick.bind(this));
}

Clicker.prototype.handleClick = function (ev) {
  this.setValue(this.val + 1);
};

Clicker.prototype.setValue = function (val) {
  this.val = val;
  this.valEl.textContent = this.val;
};

export default Clicker;





