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





