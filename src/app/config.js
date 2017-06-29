webOrganizerApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: './app/components/home/main.html'
        })
        .when('/homePage', {
            templateUrl: './app/components/home/homeView.html',
            controller: 'homeController',
            controllerAs: 'home'
        })
        .when('/#clock', {
            templateUrl: './app/components/home/digitalClock.html',
            controller: 'digitalClockController',
            controllerAs: 'dClock'
        })
        .otherwise({
            redirectTo: '/'
        });
});
