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

    def pattern_name
      route.long_name.present? ? route.long_name : route.short_name
    end

    def to_segment
      Jbuilder.new do |json|
        json.type 'TRANSIT'
        json.pattern_id id
        json.from_stop_index stop_times.first.stop_sequence
        json.to_stop_index stop_times.last.stop_sequence
      end
    end

    def to_journey
      Jbuilder.new do |json|
        json.journey_id id
        json.journey_name pattern_name
        json.segments [self.to_segment.attributes!]
      end
    end

    def to_builder
      Jbuilder.new do |trip|
        trip.stop_times stop_times.map(&:to_builder).map(&:attributes!)
        trip.service_id service_id
        trip.pattern_id id
        trip.pattern_name pattern_name
        trip.route_id route.id
      end
    end
  end

end

GTFS::Stop.send(:include, GtfsToTransitive::Stop)
GTFS::StopTime.send(:include, GtfsToTransitive::StopTime)
GTFS::Route.send(:include, GtfsToTransitive::Route)
GTFS::Trip.send(:include, GtfsToTransitive::Trip)

