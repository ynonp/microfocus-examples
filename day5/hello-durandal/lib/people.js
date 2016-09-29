define([], function () {
  const people = [
    { id: 1, name: 'bob', bio: "I'm a cool person" },
    { id: 2, name: 'jane', bio: 'she is a clerk' },
    { id: 3, name: 'bill', bio: 'knows it all' },
  ];
  return {
    getEveryone () {
      return people;
    },

    getDetailsFor (id) {
      return people.filter((p) => p.id === id)[0];
    }
  };
});
