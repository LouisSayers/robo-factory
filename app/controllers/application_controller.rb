class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  protected

  def respond_with_json
    respond_to do |format|
      format.json { render json: yield }
    end
  end

end
