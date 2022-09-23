class EventsController < ApplicationController
  wrap_parameters format: []

  def index
    render json: Event.all
  end

  def show
    render json: set_event
  end

  def create
    event = Event.create!(event_params)
    render json: event, status: :created
  end

  def update
    event = set_event
    event.update!(event_params)
    render json: event, status: :accepted
  end

  def destroy
    event = set_event
    event.destroy
    head :no_content
  end

  private

  def set_event
    set_event = Event.find(params[:id])
  end

  def event_params
    params.permit(:user_id, :mountain_id, :name, :time)
  end
end
