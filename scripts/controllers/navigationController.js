/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 24/07/2013
 * Time: 22:49
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular', '../../components/bootstrap-ui/src/tabs/tabs'
], function (angular){

    'use strict';

    return angular.module('navigation', ['ui.bootstrap.tabs'])
        .controller('navigationController', function ($scope, $location)
        {
            $scope.tabs = [
                {title: 'home', link: '/home', icon: 'icon-home'},
                {title: 'portfolio', link: '/portfolio', icon: 'icon-briefcase'},
                {title: 'contact', link: '/contact', icon: 'icon-envelope'},
                {title: 'about', link: '/about', icon: 'icon-info-sign'}
            ];
            $scope.navType = 'pills';
            $scope.onTabSelected = function (link)
            {
                $location.path(link)
            };
        });
});
