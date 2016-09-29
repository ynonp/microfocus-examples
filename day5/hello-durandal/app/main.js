requirejs.config({
  paths: {
    "jquery": "../node_modules/jquery/dist/jquery",
    "underscore": "../node_modules/underscore/underscore",
    "knockout": "../node_modules/knockout/build/output/knockout-latest",
    "text": "../node_modules/requirejs-text/text",
    "durandal": "../node_modules/durandal/js",
    "plugins": "../node_modules/durandal/js/plugins",
    "transitions": "../node_modules/durandal/js/transitions",
    'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap',
    'lib': '../lib',
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jQuery'
    }
  }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
  //>>excludeStart("build", true);
  system.debug(true);
  //>>excludeEnd("build");

  app.title = 'Durandal Starter Kit';

  app.configurePlugins({
    router:true,
    dialog: true,
    widget: true
  });

  app.start().then(function() {
    //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
    //Look for partial views in a 'views' folder in the root.
    viewLocator.useConvention();

    //Show the app by setting the root view model for our application with a transition.
    app.setRoot('viewmodels/shell', 'entrance');
  });
});
