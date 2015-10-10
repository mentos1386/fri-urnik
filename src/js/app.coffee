# Main App File
'use strict'

app = angular.module('App', [
  'ui.router'
  'ngMaterial'
  'ngResource']
)

app.config ["$httpProvider", "$mdThemingProvider", ($httpProvider, $mdThemingProvider) ->

  # Default Theme
  defaultMap = $mdThemingProvider.extendPalette('red', {
  })

  $mdThemingProvider.definePalette('default', defaultMap)

  # Default Chutter
  $mdThemingProvider.theme('default')
  .primaryPalette 'default', {
    'hue-1': '600'
    'hue-2': '700'
    'hue-3': '800'
  }
  .accentPalette 'pink'

  $mdThemingProvider.setDefaultTheme('default')
]