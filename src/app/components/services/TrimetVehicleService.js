(function(){
  'use strict';

  angular.module('app')
        .service('trimetVehicleService', [
        '$q',
        '$http',
        trimetVehicles
  ]);

  function trimetVehicles($q,$http){
      var apiUrl = 'https://developer.trimet.org/ws/v2/vehicles/appID/C0CC51742247874978039EC27';
      return {
        query: function() {
          return $http({
            url: apiUrl
          });
        }
      }
  }
})();
