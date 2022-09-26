class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
      end

      def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
      end
      
      def destroy
        user = User.find(user_params)
        user.destroy
        head :no_content
      end


private 

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end