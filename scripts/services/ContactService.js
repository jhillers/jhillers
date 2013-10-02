/**
 * Contact Service.
 */
define([
    'angular'
], function (angular)
{
    'use strict';

    return angular.module('services')
        .factory('contactFactory', function ($http, $q)
        {
            var factory = {};
            var deferred = $q.defer();
            factory.getItems = deferred.promise;

            $http.get('json/contactMethods.json').success(function (data)
            {
                deferred.resolve(data);
            });
            return factory;
        });

});
