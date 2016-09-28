export default class Clicker {
  constructor ($el) {
    this.$el = $el;
    this.click = this.click.bind(this);
    this.clicks = 0;

    this.initDOM();
  }

  click () {
    this.clicks += 1;
    this.updateDOM();
  }

  updateDOM () {
    this.$el.find('.val').text(this.clicks);
  }

  initDOM () {
    this.$el.html(`
      <p>Clicks: <span class="val">${this.clicks}</span>
      <button>Click Here</button></p>
    `);
    this.$el.on('click', 'button', this.click);
  }
}

