/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 25/07/2013
 * Time: 19:33
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular','services/aboutService'
],
    function (angular)
    {
        'use strict';

        return angular.module('about',['services'])
            .controller('aboutController', function ($scope, aboutFactory)
            {
                $scope.title = "This site was built using:";
                aboutFactory.getItems.then(function (data)
                {
                    $scope.aboutItems = data.aboutItems;
                });
            });
    });