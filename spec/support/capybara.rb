require 'capybara/rspec'
require 'capybara/poltergeist'

Capybara.configure do |config|
  config.default_driver = :poltergeist
  config.app_host = 'http://localhost'
  config.server_port = 45000
  config.always_include_port = true
  config.ignore_hidden_elements = true
end
