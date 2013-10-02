define([
    'angular'
], function (angular) {

    'use strict';

    return angular.module('home', [])
        .controller('homeController', function ($scope) {
            $scope.skills = ['Proficient in actionScript 3, creating numerous facebook games using an in-house MVC framework.',
            'Several HTML5 games, using jQuery as well as CSS3 transitions. Deployed on facebook and mobile with PhoneGap.',
            'Single page application development with Angular,Twitter Bootstrap and Sass.',
            'Currently developing an iPhone game in ActionScript using the Starling framework and RobotLegs 2.'];
        });
});
