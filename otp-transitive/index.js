var Profiler = require('otp-profiler');

// O/D points
var od = {
  from: {
    name: 'Home',
    lat: 38.895,
    lon: -77.09
  },
  to: {
    name: 'Work',
    lat: 38.894,
    lon: -77.01
  }
};

// Create new instance
var profiler = new Profiler({
  host: 'http://localhost:8080/otp/routers/default'
});

profiler.routes(function(err, routes) {
  console.log(routes); // Outputs all usable transit routes
});