/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 24/07/2013
 * Time: 22:49
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular'
], function (angular)
{
    'use strict';

    return angular.module('processing.header', [])
        .directive('processingHeader', function ()
        {
            return {

                restrict: "A",
                template: '<canvas data-processing-sources="{{sketch}}">' + '</canvas>',
                link: function (scope, element, attrs, controller)
                {
                    scope.$watch(scope.sketch,function(){
                        Processing.reload();
                    });
                }
            };

        });

});
