angular.module('app', ['ui.router', 'ui.event', 'ui.map'])

    .config(function ($stateProvider, $locationProvider, $UrlRouterProvider) {

    })

    .controller('MapCtrl', function ($scope) {
      $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    })

    .run(function ($rootScope) {

    })

;

function onGoogleReady() {
  angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
}