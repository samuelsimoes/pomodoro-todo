class ApplicationResponder < ActionController::Responder
  include Responders::FlashResponder
  include Responders::CollectionResponder
  include Responders::HttpCacheResponder

  protected

  def api_behavior(error)
    raise error unless resourceful?

    if get?
      display resource
    elsif has_errors?
      display resource.errors, :status => :unprocessable_entity
    elsif post?
      display resource, :status => :created, :location => api_location
    elsif put? || patch?
      display resource, :status => :ok
    else
      display '{}', :status => :ok
    end
  end

  def has_empty_resource_definition?
    respond_to?("empty_#{format}_resource")
  end
end
