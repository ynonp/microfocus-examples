import $ from 'jquery';

export default class SyncText {
  constructor (el) {
    this.$el = $(el);
    this.initDOM();
    this.$el.on('input', 'input', this.handleInput.bind(this));
    this.text = 'Write Something...';
    this.writeTextToAllBoxes();
  }

  add () {
    this.$el.append('<input />');
    this.writeTextToAllBoxes();
  }

  clear () {
    this.text = '';
    this.writeTextToAllBoxes();
  }

  handleInput (ev) {
    this.text = ev.target.value;
    this.writeTextToAllBoxes();
  }

  writeTextToAllBoxes () {
    $('input', this.$el).val(this.text);
  }

  initDOM () {
    this.$el.html(`
      <input />
      <input />
      <input />
      <input />
      <input />
    `);
  }

  
}

