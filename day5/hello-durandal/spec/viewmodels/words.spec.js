/*global jasmine, describe, beforeEach, it, expect, require */

/*global define*/
define([
  "jasmineAmd",
  "viewmodels/words",
], function(jasmine, WordsPage) {
  "use strict";

  var env = jasmine.getEnv(),
      describe = env.describe,
      it =  env.it,
      expect = env.expect;

  describe('viewmodels/words', function() {

    it('should split to words', function() {
      const page = new WordsPage();
      page.text('hello hello hello world');
      const words = page.words();

      expect(words).toContain({ word: 'hello', count: 3 });
      expect(words).toContain({ word: 'world', count: 1 });
    });

    it('should return empty array when text is empty', function () {
      const page = new WordsPage();
      page.text('');
      const words = page.words();

      expect(words.length).toBe(0);
    });

    it('should return empty array when text is empty', function () {
      const page = new WordsPage();
      page.text('    ');
      const words = page.words();

      expect(words.length).toBe(0);
    });



  });
});

















