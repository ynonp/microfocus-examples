define(function(require) {
  const ko = require('knockout');

  return class TodoPage {
    constructor () {
      this.nextId = 2;
      this.removeItem = this.removeItem.bind(this);
      this.things = ko.observableArray([
        { id: 1, text: 'demo app' },
      ]);
      this.itemText = ko.observable('');
    }

    handleSubmit () {
      this.things.push(
        { id: this.nextId++, text: this.itemText() }
      );
      this.itemText('');
    }

    removeItem (item) {
      this.things.remove(item);
    }
  }
});

