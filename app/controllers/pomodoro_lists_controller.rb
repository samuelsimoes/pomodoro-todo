class PomodoroListsController < ApplicationController
  respond_to :html, :json

  def index
    @pomodoro_lists = PomodoroList.all
    respond_with @pomodoro_lists
  end

  def create
    @pomodoro_list = PomodoroList.create(pomodoro_list_params)
    respond_with @pomodoro_list
  end

  private

  def pomodoro_list_params
    params.permit(:title)
  end
end
