class PomodorosController < ApplicationController
  respond_to :html, :json

  has_scope :unstarted, type: :boolean

  def index
    pomodoros = pomodoro_list.pomodoros.ordered
    respond_with apply_scopes(pomodoros)
  end

  def create
    @pomodoro = pomodoro_list.pomodoros.create(pomodoro_params)
    respond_with pomodoro, location: nil
  end

  def update
    pomodoro.update(pomodoro_params)
    respond_with pomodoro
  end

  def destroy
    pomodoro.destroy
    respond_with pomodoro
  end

  def start
    pomodoro.start!
    respond_with pomodoro, location: nil
  end

  def stop
    pomodoro.stop!
    respond_with pomodoro, location: nil
  end

  def cancel
    pomodoro.cancel!
    respond_with pomodoro, location: nil
  end

  def update_collection_order
    ActiveRecord::Base.transaction do
      Pomodoro.update(pomodoros_order_params.keys, pomodoros_order_params.values)
    end

    render json: apply_scopes(pomodoro_list.pomodoros.ordered)
  end

  private

  def pomodoro_list
    @pomodoro_list ||= PomodoroList.find(params[:pomodoro_list_id])
  end

  def pomodoro
    @pomodoro ||= pomodoro_list.pomodoros.find(params[:id])
  end

  def pomodoros_order_params
    @pomodoros_orders ||= params[:_json].inject({}) do |result, pomodoro|
      result[pomodoro[:id]] = pomodoro.extract!(:order).permit(:order)
      result
    end
  end

  def pomodoro_params
    params.permit(:order, :description)
  end
end
