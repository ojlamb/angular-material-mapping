(function(){
  angular
       .module('app')
       .controller('GoogleMapsController', ["$scope", GoogleMapsController ]);
function GoogleMapsController($scope) {
    angular.extend($scope, {
        boulder: {
           lat: 40.0150,
           lng: -105.2705,
           zoom: 14
        },
        markers: {
           m1: {
               lat: 40.0150,
               lng: -105.2705
           }
        },
        layers: {
           baselayers: {
               googleTerrain: {
                   name: 'Google Terrain',
                   layerType: 'TERRAIN',
                   type: 'google'
               },
               googleHybrid: {
                   name: 'Google Hybrid',
                   layerType: 'HYBRID',
                   type: 'google'
               },
               googleRoadmap: {
                   name: 'Google Streets',
                   layerType: 'ROADMAP',
                   type: 'google'
               }
           }
        }
    });
   }
})();
