function initMap() {

  var styles = [
    {
      stylers: [
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.2634914, -79.9956615),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // var transitLayer = new google.maps.TransitLayer();
  // transitLayer.setMap(map);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  ShapesLayer = new google.maps.KmlLayer({
      url: 'https://raw.githubusercontent.com/dcunited001/noke-codes-ride-solutions/master/google-maps/shapes.kml',
      clickable: false,
      preserveViewport: true,
      suppressInfoWindows: true,
      screenOverlays: false
  });

  // pre-generated KMZ file of stops from GTFS feed
  // *** needs to be full URL from your server - sample provided here
  var StopsLayer = new google.maps.KmlLayer({
      url: 'https://raw.githubusercontent.com/dcunited001/noke-codes-ride-solutions/master/google-maps/stops.kml',
      clickable: true,
      preserveViewport: true,
      suppressInfoWindows: false,
      screenOverlays: false
  });

  StopsLayer.setMap(map);
  ShapesLayer.setMap(map);

  // var RouteLayer = new google.maps.KmlLayer({
  //   url: 'https://raw.githubusercontent.com/dcunited001/noke-codes-ride-solutions/master/google-maps/roanoke-va-us-archiver_20150214_0144.kml',
  //   map: map
  // });
}

