require 'gtfs'
require 'jbuilder'

module GtfsToTransitive

  module Stop
    def to_builder
      Jbuilder.new do |stop|
        stop.stop_id id
        stop.stop_name name
        stop.stop_lat lat
        stop.stop_lon lon
      end
    end
  end

  module Route
    def to_builder
      Jbuilder.new do |route|
        route.agency_id agency_id
        route.route_id id
        route.route_short_name short_name
        route.route_long_name long_name
        route.route_type type
        route.color color
      end
    end
  end

  module StopTime
    def to_builder
      Jbuilder.new do |st|
        st.stop_id stop_id
      end
    end
  end

  module Trip
    def Trip.included(base)
      attr_accessor :route, :stop_times
    end

    def to_builder
      Jbuilder.new do |trip|
        trip.stop_times stop_times.map(&:to_builder).map(&:attributes!)
        trip.pattern_id service_id
        trip.pattern_name route.long_name
        trip.route_id route.short_name
      end
    end
  end

end

GTFS::Stop.send(:include, GtfsToTransitive::Stop)
GTFS::StopTime.send(:include, GtfsToTransitive::StopTime)
GTFS::Route.send(:include, GtfsToTransitive::Route)
GTFS::Trip.send(:include, GtfsToTransitive::Trip)

