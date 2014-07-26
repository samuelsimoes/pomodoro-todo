class TomatoesController < ApplicationController
  respond_to :html, :json

  has_scope :unstarted, type: :boolean

  def index
    tomatoes = pomodoro_list.tomatoes.ordered
    respond_with apply_scopes(tomatoes)
  end

  def create
    @tomato = pomodoro_list.tomatoes.create(tomato_params)
    respond_with tomato, location: nil
  end

  def update
    tomato.update(tomato_params)
    respond_with tomato
  end

  def destroy
    tomato.destroy
    respond_with tomato
  end

  def start
    tomato.start!
    respond_with tomato, location: nil
  end

  def stop
    tomato.stop!
    respond_with tomato, location: nil
  end

  def cancel
    tomato.cancel!
    respond_with tomato, location: nil
  end

  def update_collection_order
    ActiveRecord::Base.transaction do
      Tomato.update(tomatoes_order_params.keys, tomatoes_order_params.values)
    end

    render json: apply_scopes(pomodoro_list.tomatoes.ordered)
  end

  private

  def pomodoro_list
    @pomodoro_list ||= PomodoroList.find(params[:pomodoro_list_id])
  end

  def tomato
    @tomato ||= pomodoro_list.tomatoes.find(params[:id])
  end

  def tomatoes_order_params
    @tomatoes_orders ||= params[:_json].inject({}) do |result, tomato|
      result[tomato[:id]] = tomato.extract!(:order).permit(:order)
      result
    end
  end

  def tomato_params
    params.permit(:order, :description)
  end
end
