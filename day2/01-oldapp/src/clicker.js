/*
 * members: relevant DOM elements + value
 * functions: event handlers + private methods
 */
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

  // ALL event handlers SHOULD BE bound
  this.btnEl.addEventListener('click', this.handleClick.bind(this));
}

Clicker.prototype.handleClick = function (ev) {
  this.val+=1;
  this.valEl.textContent = this.val;
};

const clickers = document.querySelectorAll('.clicker');
for (let i=0; i < clickers.length; i++) {
  const c = new Clicker(clickers[i]);
}
