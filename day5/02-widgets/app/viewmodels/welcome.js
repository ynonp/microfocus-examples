define(function(require) {
  const ko = require('knockout');

  return class WelcomePage {
    constructor() {
      this.msg = ko.observable('Hello World');
    }
  }
});
