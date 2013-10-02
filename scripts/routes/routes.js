define([
    'angular',
    'app'
], function (angular, app)
{
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
            .when('/portfolio', {
                templateUrl: 'views/portfolio.html',
                controller: 'portfolioController'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            });
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

});
