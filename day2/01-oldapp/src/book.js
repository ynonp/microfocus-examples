/**
 * A class is just a constructor function
 */
const BookMaster = {
  isInteresting: function() {
    return this.title.charAt(0) === 'a';
  },
};

function Book(author, title) {
  // I'm a ctor and my object is "this"
  this.title = title;
  this.author = author;
}
Book.prototype = BookMaster;

const b1 = new Book('bob', 'a stuff');
const b2 = new Book('bob', 'stuff');

b1.isInteresting();

