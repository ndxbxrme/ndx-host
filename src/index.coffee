'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx', []
module.run ($http, $window) ->
  $http.defaults.headers.common.ndxhost = "#{$window.location.protocol}//#{$window.location.host}"
