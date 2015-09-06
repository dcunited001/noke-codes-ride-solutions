angular.module('app', ['ui.router', 'ui.event'])

    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    })

    .run(function ($rootScope) {

    })

;

angular.module('app.ui-map', ['ui.map'])

    .controller('TransitCtrl', function($scope) {
      $scope.toggleKML = function() {
        $scope.$broadcast('kml:toggle');
      };
    })

    .controller('MapCtrl', function ($scope) {
      $scope.mapOptions = {
//        center: new google.maps.LatLng(37.30, -80.00),
//        zoom: 15,
        zoom: 11,
        center: {lat: 41.876, lng: -87.624},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.transitLayer = new google.maps.KmlLayer({
        url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml'
      });

      $scope.$on('kml:toggle', function () {
        if ($scope.transitLayer.map === null || $scope.transitLayer.map === undefined) {
          $scope.transitLayer.setMap($scope.transitMap);
        } else {
          $scope.transitLayer.setMap(null);
          //delete $scope.transitLayer
        }
      });
    })

;

window.onGoogleReady = function() {
  angular.bootstrap(document.getElementById("transit"), ['app.ui-map']);
};