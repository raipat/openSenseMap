'use strict';

angular
  .module('openSenseMapApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngDialog',
    'leaflet-directive',
    'ui.bootstrap',
    'nya.bootstrap.select',
    'osemFilters',
    'angular-underscore',
    'rcWizard',
    'rcForm',
    'ngClipboard',
    'flow',
    'ui.checkbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/explore', {
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      })
      .when('/getid', {
        templateUrl: 'views/getid.html',
        controller: 'GetIdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['ngClipProvider', function(ngClipProvider) {
      ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
  }])
  .filter('unsafe', ['$sce', function($sce){
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  }]);

  // update popover template for binding unsafe html
angular.module('template/popover/popover.html', []).run(['$templateCache', function ($templateCache) {
  $templateCache.put('template/popover/popover.html',
    '<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n' +
    '  <div class=\"arrow\"></div>\n' +
    '\n' +
    '  <div class=\"popover-inner\">\n' +
    '      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n' +
    '      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);