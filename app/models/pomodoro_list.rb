class PomodoroList < ActiveRecord::Base
  validates :title, presence: true

  has_many :tomatoes, dependent: :destroy

  def running_pomodoro
    tomatoes.running.first
  end

  def tomatoes_ids
    tomatoes.map(&:id)
  end
end
