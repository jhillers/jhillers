require([
    //'jquery',
    'processing',
    'angular',
    'app',
    'routes/routes',
    'services/services'
    /*'angular-resource',
     'angular-cookies',
     'angular-sanitize',*/
], function (processing,angular, app)
{
    'use strict';

    var html = document.getElementsByTagName('html')[0];
    html.className += ' ng-app';
    angular.bootstrap(html, [app.name]);
});
