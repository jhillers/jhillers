/**
 * about Service.
 */
define([
    'angular'
], function (angular)
{
    'use strict';

    return angular.module('json.service', [])
        .factory('jsonService', function ($http, $q)
        {
            var factory = {};
            var deferred = $q.defer();
            factory.getItems = function Service(src)
            {
                $http.get('../../json/' + src + '.json').success(function (data)
                {
                    deferred.resolve(data);
                });
                return deferred.promise;
            };
            return factory;
        });

});
