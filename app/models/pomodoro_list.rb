class PomodoroList < ActiveRecord::Base
  validates :title, presence: true

  has_many :pomodoros, dependent: :destroy

  def running_pomodoro
    pomodoros.running.first
  end
end
