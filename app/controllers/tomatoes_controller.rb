class TomatoesController < ApplicationController
  respond_to :html, :json
  before_action :set_tomato, except: [:index, :create, :update_collection_order]

  def index
    @tomatoes = Tomato.without_started.all
    respond_with @tomatoes
  end

  def create
    @tomato = Tomato.create(tomato_params)
    respond_with @tomato
  end

  def update
    @tomato.update(tomato_params)
    respond_with @tomato
  end

  def destroy
    @tomato.destroy
    respond_with @tomato
  end

  def start
    @tomato.start!
    respond_with @tomato, location: nil
  end

  def stop
    @tomato.stop!
    respond_with @tomato, location: nil
  end

  def cancel
    @tomato.cancel!
    respond_with @tomato, location: nil
  end

  def update_collection_order
    ActiveRecord::Base.transaction do
      Tomato.update(tomatoes_order_params.keys, tomatoes_order_params.values)
    end

    render json: Tomato.without_started.ordered.all
  end

  private

  def tomatoes_order_params
    @tomatoes_orders ||= params[:_json].inject({}) do |result, tomato|
      result[tomato[:id]] = tomato.extract!(:order).permit(:order)
      result
    end
  end

  def set_tomato
    @tomato = Tomato.find(params[:id])
  end

  def tomato_params
    params.permit(:order, :description)
  end
end
