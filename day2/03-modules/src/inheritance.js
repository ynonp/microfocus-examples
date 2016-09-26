function Rentable (title) {
  this.title = title;
}

Rentable.prototype.isAvailable = function () {
  return this.title.charAt(0) === 'a';
};

Book.prototype = Object.create(Rentable.prototype);

Book.prototype.isInteresting = function () {
};

function Book (title, author) {
  Rentable.call(this, title);
  this.author = author;
}

function Video (title) {
  this.title = title;
}

Video.prototype.isInteresting = function () {
  return this.title.charAt(0) === 'a';
};
