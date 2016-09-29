define(['knockout'], function (ko) {
  return class Clicker {
    activate (settings) {
      const initialValue = Number(settings.start) || 0;
      this.val = ko.observable(initialValue);
    }

    incVal () {
      this.val(this.val() + 1);
    }
  }
});
