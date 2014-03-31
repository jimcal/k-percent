'use strict';

angular.module('kPercentApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'k-percentFilters'
 
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
