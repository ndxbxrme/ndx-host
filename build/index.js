(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx', []);
  }

  module.run(function($http, $window) {
    return $http.defaults.headers.common.ndxhost = $window.location.protocol + "//" + $window.location.host;
  });

}).call(this);

//# sourceMappingURL=index.js.map
