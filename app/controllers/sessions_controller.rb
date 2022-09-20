class SessionsController < ApplicationController

    def create
      user = User.find_by(name: params[:name])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: {errors: "Invalid Credentials"}, status: :unauthorized
      end
    end
  
    def logged_in
      if current_user.valid?
        render json: current_user, status: :ok
      else
        render json: { 
          error: "User not logged in",
          logged_in: false,
          status: :unauthorized
        }
      end
    end
  
    def destroy
      session.delete :user_id
    end
  
  end