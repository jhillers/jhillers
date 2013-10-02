/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 25/07/2013
 * Time: 19:33
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular', 'services/ContactService'
],
    function (angular)
    {

        'use strict';

        return angular.module('contact',['services'])
            .controller('contactController', function ($scope, contactFactory)
            {
                $scope.title = "Contact Me";
                contactFactory.getItems.then(function (data)
                {
                    $scope.contactMethods = data.contactMethods;
                });
            });
    });