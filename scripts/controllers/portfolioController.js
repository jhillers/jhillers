/**
 * Created with IntelliJ IDEA.
 * User: josehilllers
 * Date: 25/07/2013
 * Time: 19:33
 * To change this template use File | Settings | File Templates.
 */
define([
    'angular', 'services/PortfolioService',
    '../../components/bootstrap-ui/src/transition/transition',
    '../../components/bootstrap-ui/src/carousel/carousel',
    '../../components/bootstrap-ui/src/position/position',
    '../../components/bootstrap-ui/src/typeahead/typeahead'
],
    function (angular)
    {

        'use strict';

        return angular.module('portfolio', ['ui.bootstrap.carousel', 'ui.bootstrap.typeahead', 'services'])
            .controller('portfolioController', function ($scope, portfolioFactory, $filter)
            {
                $scope.slideInterval = -1;

                portfolioFactory.getItems.then(function (data)
                {
                    var portfolioItems = data.portfolioElements;
                    $scope.portfolioItems = portfolioItems;
                    $scope.tagList = getTagList(portfolioItems);
                });

                $scope.onSelect = function ()
                {
                    var portfolioItems = $scope.portfolioItems.sort(function(a,b){
                        return a.name > b.name
                    });
                    var length = portfolioItems.length;
                    for (var i = 0; i < length; i++)
                    {
                        var item = portfolioItems[i];
                        if (item.tags.indexOf($scope.filterText.tags) >= 0)
                        {
                            item.active = true;
                            break;
                        }
                    }
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