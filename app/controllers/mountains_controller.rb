class MountainsController < ApplicationController
    
    def index
        render json: Mountain.all
    end
  
    def show
        render json: set_mountain, include: :lift
    end

    private 

    def set_mountain
        set_mountain = Mountain.find(params[:id])
    end
end