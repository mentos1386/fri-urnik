(function() {
  'use strict';
  var app;

  app = angular.module('App', ['ui.router', 'ngMaterial', 'ngResource']);

  app.config([
    "$httpProvider", "$mdThemingProvider", function($httpProvider, $mdThemingProvider) {
      var defaultMap;
      defaultMap = $mdThemingProvider.extendPalette('red', {});
      $mdThemingProvider.definePalette('default', defaultMap);
      $mdThemingProvider.theme('default').primaryPalette('default', {
        'hue-1': '600',
        'hue-2': '700',
        'hue-3': '800'
      }).accentPalette('pink');
      return $mdThemingProvider.setDefaultTheme('default');
    }
  ]);

}).call(this);
