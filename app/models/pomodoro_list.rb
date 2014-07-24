class PomodoroList < ActiveRecord::Base
  validates :title, presence: true
end
