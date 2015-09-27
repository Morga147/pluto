class BbqsController < ApplicationController
  def index
    @bbq_locations = Bbq.joins('INNER JOIN parks ON parks.prop_id = bbq_locations.prop_id')
  end
end
