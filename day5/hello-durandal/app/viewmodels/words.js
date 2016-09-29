define(function(require) {
  const ko = require('knockout');
  const _ = require('underscore');

  return class WordsPage {
    constructor () {
      const that = this;

      that.text = ko.observable('');
      that.words = ko.computed({
        read: function () {
          const counts = _.countBy(that.text().split(/\s+/));
          const res = Object.keys(counts).map( (word) => ({ word: word, count: counts[word] })); 
          return res.filter((item) => item.word.length > 0);
        }
      });
    }
  }
});


