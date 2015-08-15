## Noke Codes Ride Solutions

### Dependencies

#### [PostGIS](https://wiki.openstreetmap.org/wiki/PostGIS/Installation)

This is an extension for postgres that provides GIS geometries and
functionality.  Mapnik can be configured to use PostGIS as a datasource.

#### Mapnik

This is a server with

#### [osm2pgsql](https://wiki.openstreetmap.org/wiki/Osm2pgsql)

This project imports Open Street Map data into PostGIS.

#### [Mapbox Studio](https://www.mapbox.com/mapbox-studio/)

This app lets you style maps returned by Mapnik.  You'll need to create
an account on Mapbox.

### Install Dependencies

On OSX:

```bash
brew install postgresql
brew install postgis
brew install protobuf
brew install protobuf-c
brew install osm2pgsql --with-protobuf-c #protobuf required to import .pbf files
brew install mapnik
```

### Setup PostGIS

Refer to [osm2pgsql's guide](https://github.com/openstreetmap/osm2pgsql#usage) if you have problems.

```
createdb nokecodes # to create a new postgres database
psql -d gis -c 'CREATE EXTENSION postgis; CREATE EXTENSION hstore;'
```

### Import .PBF map data into your PostGIS database



### Run Mapnik



### Download GTFS File


### Convert GTFS Routes to GPX with Graphhopper API


### Import GTFS Route Stop Locations and GPX into Mapbox Studio




## Resources

Here's some GIS links I've found useful so far.


[Conveyal Open Source Tools](https://github.com/conveyal/): read more about it on their [blog](http://conveyal.com/)

[GTFS for Roanoke](http://www.gtfs-data-exchange.com/agency/valley-metro/): we'll need to listen to updates for the Roanoke GTFS
  file

Somehow, we'll need to convert the GTFS Route Stops into GPX format. We
might be able to use [gtfs-osm-sync](https://github.com/CUTR-at-USF/gtfs-osm-sync)

[OpenStreetMaps(OSM)](https://www.openstreetmap.org/) transit layer to generate a vanilla base map to
  draw on 

[Track Drawing Services](https://github.com/conveyal/transitive.js) listed on OSM's wiki.

[LeafletJS](http://leafletjs.com/) to draw on a map from OpenStreetMaps. Uses OpenLayers under
  the hood.

[TransitiveJS](https://github.com/conveyal/transitive.js) which provides prettified transits lines drawn on top of a LeafletJS map.

[OpenLayers](http://openlayers.org/) can pull map tile images from OpenStreetMaps. 

[Overpass API](https://github.com/drolbr/Overpass-API) query OpenStreetMaps data

[GPS Visualizer](http://www.gpsvisualizer.com/) is an online tool that can convert lists of GPS points
  to the GPX track format.  Not sure how useful this will be for us.





