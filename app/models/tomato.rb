class Tomato < ActiveRecord::Base
  before_create :define_order

  def define_order
    last_tomato = Tomato.ordered.last
    self.order = last_tomato.blank? ? 0 : (last_tomato.order + 1)
  end

  def self.ordered
    order(arel_table[:order].asc)
  end

  def self.current_running
    where.not(started_at: nil)
    .where(finished_at: nil)
    .first
  end

  def start!
    raise OtherTomatoRunning if Tomato.current_running.present?
    update(started_at: Time.current)
  end

  def stop!
    update(finished_at: Time.current)
  end

  def cancel!
    update(started_at: nil)
  end

  class OtherTomatoRunning < StandardError; end
end
