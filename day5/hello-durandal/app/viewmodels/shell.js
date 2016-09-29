define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '',     title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'todo', title:'Todo', moduleId: 'viewmodels/todo', nav: true },
                { route: 'words', title:'Words', moduleId: 'viewmodels/words', nav: true },
                { route: 'person/:id', title:'Words', moduleId: 'viewmodels/person', nav: false },
                { route: 'people', title:'People', moduleId: 'viewmodels/people', nav: true },
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});
