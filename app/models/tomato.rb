class Tomato < ActiveRecord::Base
  before_create :define_order

  belongs_to :pomodoro_list

  validates :description, presence: true

  def define_order
    last_tomato = pomodoro_list.tomatoes.ordered.last
    self.order = last_tomato.blank? ? 0 : (last_tomato.order + 1)
  end

  def self.ordered
    order(arel_table[:order].asc)
  end

  def self.finished
    where.not(started_at: nil)
    .where.not(finished_at: nil)
  end

  def self.running
    where.not(started_at: nil)
    .where(finished_at: nil)
  end

  def self.unstarted
    where(started_at: nil)
  end

  def start!
    raise OtherTomatoRunning if pomodoro_list.running_pomodoro.present?
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
