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

  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}