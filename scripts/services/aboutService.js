/**
 * about Service.
 */
define([
    'angular'
], function (angular)
{
    'use strict';

    return angular.module('services')
        .factory('aboutFactory', function ($http, $q)
        {
            var factory = {};
            var deferred = $q.defer();
            factory.getItems = deferred.promise;

            $http.get('../../json/aboutItems.json').success(function (data)
            {
                deferred.resolve(data);
            });
            return factory;
        });

});
