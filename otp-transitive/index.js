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
  host: 'http://localhost:8080/otp/routers/default',
  limit: 3
});

var profile;
var opts = {
  from: {
    lat: 37.40,
    lon: -80.20
  },
  to: {
    lat: 37.20,
    lon: -79.75
  }
};

profiler.journey(opts, function(err, data) {
  console.log(data);
});

//profiler.profile(opts, function(err, p) {
//  profile = p;
//  console.log(p); // Outputs all usable transit routes
//});

//profiler.routes(function(err, routes) {
//  console.log(routes); // Outputs all usable transit routes
//});

//
//profiler.patterns(profile, function(err, p) {
//  console.log(p); // Outputs all usable transit routes
//});
