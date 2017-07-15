webOrganizerApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
    .otherwise({
        redirectTo: '/'
    });

});
