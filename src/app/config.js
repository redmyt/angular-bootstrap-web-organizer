webOrganizerApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/clock'
        })
        .when('/homePage', {
            templateUrl: './app/components/home/homeView.html',
            controller: 'homeController',
            controllerAs: 'home'
        })
        .when('/clock', {
            templateUrl: './app/components/home/digitalClock.html',
            controller: 'digitalClockController',
            controllerAs: 'dClock'
        })
        .otherwise({
            redirectTo: '/'
        });
});
