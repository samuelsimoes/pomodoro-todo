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

  def update
    pomodoro_list = PomodoroList.find(params[:id])
    pomodoro_list.update(pomodoro_list_params)
    respond_with pomodoro_list
  end

  def destroy
    pomodoro_list = PomodoroList.find(params[:id])
    pomodoro_list.destroy
    respond_with pomodoro_list
  end

  def running_pomodoro
    pomodoro_list = PomodoroList.find(params[:id])
    running_pomodoro = pomodoro_list.running_pomodoro

    raise ActiveRecord::RecordNotFound if running_pomodoro.blank?

    respond_with running_pomodoro
  end

  private

  def pomodoro_list_params
    params.permit(:title)
  end
end
