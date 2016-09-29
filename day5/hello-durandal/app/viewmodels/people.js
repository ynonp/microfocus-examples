define(['knockout', 'lib/people'], function(ko, people) {

  return class PersonPage {
    constructor () {
      this.people = people.getEveryone();
    }
  }
});



