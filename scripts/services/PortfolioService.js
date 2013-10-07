/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 30/07/2013
 * Time: 22:27
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular'
], function (angular)
{
    'use strict';

    return angular.module('services')
        .factory('portfolioFactory', function ($http, $q)
        {
            var factory = {};
            var deferred = $q.defer();
            factory.getItems = deferred.promise;

            $http.get('../../json/portfolioElements.json').success(function (data)
            {
                deferred.resolve(data);
            });
            return factory;
        });

});
