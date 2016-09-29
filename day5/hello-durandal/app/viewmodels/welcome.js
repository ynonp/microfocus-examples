define(function(require) {
  const ko = require('knockout');

  return class WelcomePage {
    constructor () {
      this.msg = ko.observable('Wow data binding...');
      this.clicks = ko.observable(0);
    }
    
    handleClick () {
      this.clicks(this.clicks() + 1);
    }


  }
});
