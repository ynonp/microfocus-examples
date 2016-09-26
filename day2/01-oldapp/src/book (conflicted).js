
/**
 * A class is just a constructor function
 */
const BookMaster = {
  whoami: 'The Master',
  isInteresting: function() {
    return title.charAt(0) === 'a';
  },
};

function Book(author, title) {
  // I'm a ctor and my object is "this"

  const book = {
    title: title,
    author: author,
  };

  return book;
}

const b1 = new Book('bob', 'you want');
b1.whoami;
