angular.module('app', ['ui.router', 'ui.event', 'ui.map'])

    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

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

window.onGoogleReady = function() {
  angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
};