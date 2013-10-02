define([
    'angular',
    'controllers/homeController',
    'controllers/navigationController',
    'controllers/portfolioController',
    'controllers/contactController',
    'controllers/aboutController',
    'controllers/headerController']
    , function (angular)
{
    'use strict';

    return angular.module('portfolioApp', ['home', 'navigation', 'portfolio',
        'contact',"about",'header']);
});
