define(function(require) {
  const ko = require('knockout');

  return class WelcomePage {
    constructor () {
      this.msg = ko.observable('Wow data binding...');
      this.clicks = ko.observable(0);
      this.seconds = ko.observable(0);

      const that = this;

      this.minutes = ko.computed({
        read: function() {
          console.log('minutes!');
          return that.seconds() / 60;
        },
        write: function(value) {
          that.seconds(value * 60);
        }
      });

      this.hours = ko.computed({
        read: function() {
          return that.seconds() / 3600;
        },
        write: function(value) {
          that.seconds(value * 3600);
        }
      });

    }

    handleClick () {
      this.clicks(this.clicks() + 1);
    }


  }
});
