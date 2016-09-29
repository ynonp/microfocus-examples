/*global jasmine, describe, beforeEach, it, expect, require */

/*global define*/
define([
  "jasmineAmd",
  "viewmodels/welcome",
], function(jasmine, WelcomePage) {
  "use strict";

  var env = jasmine.getEnv(),
      describe = env.describe,
      it =  env.it,
      expect = env.expect;

  describe('viewmodels/welcome', function() {

    it('should work', function() {
      const page = new WelcomePage();
      expect(page).toBeTruthy();
    });
  });
});


