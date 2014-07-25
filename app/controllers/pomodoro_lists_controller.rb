class PomodoroListsController < ApplicationController
  respond_to :html, :json

  def index
    @pomodoro_lists = PomodoroList.all
    respond_with @pomodoro_lists
  end
end
