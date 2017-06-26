webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/homePage'
    })
    .when('/homePage', {
        templateUrl : './app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .otherwise({
        redirectTo: '/'
    });
});
