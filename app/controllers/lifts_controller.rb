class LiftsController < ApplicationController

    def index
        render json: Lift.all
    end
  
    def show
        lift = Lift.find(params[:id])
        render json: lift
    end


end
