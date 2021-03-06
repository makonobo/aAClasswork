class SessionsController < ApplicationController

    before_action :require_logged_out, only: [:new]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      redirect_to cats_url
    else
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
    redirect_to cats_url
  end

end
