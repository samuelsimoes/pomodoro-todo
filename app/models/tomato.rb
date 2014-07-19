class Tomato < ActiveRecord::Base
  before_create :define_order

  def define_order
    last_tomato = Tomato.ordered.last
    self.order = last_tomato.blank? ? 0 : (last_tomato.order + 1)
  end

  def self.ordered
    order(arel_table[:order].asc)
  end
end
