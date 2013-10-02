/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 25/07/2013
 * Time: 19:33
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular', 'services/PortfolioService', '../../components/bootstrap-ui/src/transition/transition',
    '../../components/bootstrap-ui/src/carousel/carousel',
    '../../components/bootstrap-ui/src/position/position',
    '../../components/bootstrap-ui/src/typeahead/typeahead'
],
    function (angular)
    {

        'use strict';

        return angular.module('portfolio', ['ui.bootstrap.carousel', 'ui.bootstrap.typeahead', 'services'])
            .controller('portfolioController', function ($scope, portfolioFactory,$filter)
            {
                $scope.slideInterval = -1;

                portfolioFactory.getItems.then(function (data)
                {
                    var portfolioItems = data.portfolioElements;
                    $scope.portfolioItems = portfolioItems;
                    $scope.tagList = getTagList(portfolioItems);
                });

                $scope.onSelect = function (item)
                {

                    console.log($filter('filter')($scope.filterText.tags,$scope.tagList));
                    $scope.portfolioItems[0].active = true;
                };

                function getTagList(portfolioItems)
                {
                    var array = [];
                    angular.forEach(portfolioItems, function (items)
                    {
                        var newTags = items.tags.split(' ');
                        angular.forEach(newTags, function (tag)
                        {
                            if (array.indexOf(tag) == -1)
                            {
                                array.push(tag);
                            }
                        });
                    });
                    return array;
                }
            });
    });