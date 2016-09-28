export default class TimerConverter {
  constructor ($el) {
    this.val = 0;
    this.$el = $el;
    this.handleInput = this.handleInput.bind(this);
    this.initDOM();
  }

  set (factor, val) {
    this.val = factor * val;
  }

  handleInput (ev) {
    const factor = Number(ev.target.dataset.factor);
    const val = Number(ev.target.value);
    this.set(factor, val);
    this.writeToDOM();
  }

  writeToDOM () {
    const seconds = this.val;

    this.$el.find('input').each(function (idx, item) {
      const factor = Number(item.dataset.factor);
      item.value = (seconds / factor);
    });
  }

  initDOM () {
    this.$el.html(`
      <div>
        <label>Hours
        <input type="number" data-factor="3600" />
      </div>
      <div>
        <label>Minutes
        <input type="number" data-factor="60" />
      </div>
      <div>
        <label>Seconds
        <input type="number" data-factor="1" />
      </div>
    `);
    this.$el.on('input', 'input', this.handleInput);
  }
}

