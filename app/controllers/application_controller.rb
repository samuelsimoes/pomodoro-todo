class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  self.responder = ApplicationResponder

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def javascript_exists?
    script = "#{Rails.root}/app/assets/javascripts/#{controller_path}.js"
    File.exists?(script)
  end
  helper_method :javascript_exists?

  protected

  def not_found
    if request.xhr?
      render nothing: true, status: :not_found
    else
      redirect_to root_path
    end
  end
end
