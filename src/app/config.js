webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/homePage'
    })
    .when('/homePage', {
        templateUrl : '/app/components/home/homeView.html',
        controller: '/app/components/home/homeController.js',
        controllerAs: 'home'
    })
    .otherwise({
        redirectTo: '/'
    });
});
