var Transitive = require('transitive');
var DATA = require('transitive-demo/transitiveData.js');
var STYLES = require('transitive-demo/transitiveStyles.js');

var transitive = new Transitive({
  el: document.getElementById('canvas'),
  legendEl: document.getElementById('legend'),
  data: DATA,
  styles: STYLES,
  drawGrid: false,
  gridCellSize: 300,
  initialBounds: [
    [-80.20, 37.40],
    [-79.75, 37.20]
  ],
  displayMargins: {
    right: 400,
    bottom: 50
  }//,
  //draggableTypes: ['PLACE']
});

transitive.render();

//// set up the journey option list
//DATA.journeys.forEach(function(journey, index) {
//  var div = document.createElement("div");
//  div.id = journey.journey_id;
//  div.className = 'listItem';
//  div.innerHTML = journey.journey_name;
//
//  div.onmouseover = function(event) {
//    transitive.focusJourney(event.target.id);
//  };
//  div.onmouseout = function(event) {
//    transitive.focusJourney();
//
//  };
//  document.getElementById('list').appendChild(div);
//});
//
//// set up the renderer toggle links (default vs. wireframe)
//function setRenderer(renderer) {
//  transitive.setRenderer(renderer);
//  transitive.render();
//}
//
//document.getElementById('default-renderer').onclick = function(event) {
//  setRenderer('default')
//};
//
//document.getElementById('wireframe-renderer').onclick = function(event) {
//  setRenderer('wireframe')
//};