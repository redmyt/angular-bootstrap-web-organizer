webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .when('/funClock', {
        templateUrl : './app/components/clock/funClockView.html',
        controller: 'funClockController',
        controllerAs: 'funClock'
    })
    .otherwise({
        redirectTo: '/'
    });

});
