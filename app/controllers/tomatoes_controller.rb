class TomatoesController < ApplicationController
  respond_to :html, :json
  before_action :set_tomato, only: [:show, :edit, :update, :destroy]

  def index
    @tomatoes = Tomato.all
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

  private

  def set_tomato
    @tomato = Tomato.find(params[:id])
  end

  def tomato_params
    params.permit(:order, :description)
  end
end
