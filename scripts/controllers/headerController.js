/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 25/07/2013
 * Time: 19:33
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular'
],
    function (angular) {

        'use strict';

        return angular.module('header', ['processing.header'])
            .controller('headerController', function ($scope)
            {
                $scope.sketch = "sketches/bubbles.pde";
            });

    });