(function(){
  angular
       .module('app')
       .controller('GoogleMapsController', [
           "$scope",
           'trimetVehicleService',
           GoogleMapsController
       ]);
function GoogleMapsController($scope, trimetVehicleService) {
    var self = this;

    angular.extend($scope, {
        portland: {
           lat: 45.533,
           lng: -122.657,
           zoom: 13
        },
        markers: {
           m1: {
               lat: 45.533,
               lng: -122.657
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
    trimetVehicleService
        .query()
        .then(function (response) {
            self.vehicleGeom = []
            self.vehicleData = response.data.resultSet.vehicle
            for(i = 0; i < self.vehicleData.length; i++){
                console.log(self.vehicleData[i].longitude)
                self.vehicleGeom.push({
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [self.vehicleData[i].longitude,self.vehicleData[i].latitude]
                  },
                  properties: {
                    route: self.vehicleData[i]["signMessage"],
                    vehicle_type: self.vehicleData[i]["type"],
                    next_stop: self.vehicleData[i]["nextLocID"],
                  },
                })
            }
        angular.extend($scope, {
            geojson: {
                data: self.vehicleGeom,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    });

   }
})();
