webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .when('/calculator', {
        templateUrl : './app/components/calculator/calculatorView.html',
        controller: 'calculatorController',
        controllerAs: 'calculator'
    })
    .otherwise({
        redirectTo: '/'
    });
});
