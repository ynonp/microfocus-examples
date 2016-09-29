define(['knockout', 'lib/people'], function(ko, people) {

  return class PersonPage {
    constructor () {
    }

    activate (id) {
      this.person = people.getDetailsFor(Number(id));
      this.name = ko.observable(this.person.name);
      this.bio = ko.observable(this.person.bio);

      return $.ajax({ url: ..., data: ..., );
    }
  }
});


