define([], function() {
  require.config({
    "baseUrl": "app/",
    "paths": {
      "jquery": "../node_modules/jquery/dist/jquery",
    "underscore": "../node_modules/underscore/underscore",
      "knockout": "../node_modules/knockout/build/output/knockout-latest",
      "text": "../node_modules/requirejs-text/text",
      "durandal": "../node_modules/durandal/js",
      "plugins": "../node_modules/durandal/js/plugins",
      "transitions": "../node_modules/durandal/js/transitions",
      "jasmine": "../node_modules/jasmine-core/lib/jasmine-core/jasmine",
      "jasmine-html": "../node_modules/jasmine-core/lib/jasmine-core/jasmine-html",
      "jasmineAmd": "../lib/jasmineAmd",
    },
    shim: {
      "jasmine": {
        exports: "jasmineRequire"
      },
      "jasmine-html": {
        deps: ["jasmine"],
        exports: "jasmineRequire"
      }
    }
  });

  var specs = [
    'spec/viewmodels/welcome.spec.js',
    'spec/viewmodels/words.spec.js',
  ];

  require(["../lib/bootAmd.js"].concat(specs), function (boot) {
    // All of the specs have been loaded. Initialize the HTML Reporter and execute the environment.
    boot.initializeHtmlReporter();
    boot.execute();
  });

});
