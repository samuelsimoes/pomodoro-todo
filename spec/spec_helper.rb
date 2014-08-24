ENV["RAILS_ENV"] ||= 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'

Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.use_transactional_fixtures = false

  config.infer_spec_type_from_file_location!

  # https://github.com/jnicklas/turnip/wiki/Fixtures
  config.before(:each, type: :feature) do
    fixture_path = "#{Rails.root}/spec/fixtures"
    fixtures = Dir["#{fixture_path}/**/*.yml"].map { |f| File.basename(f, '.yml') }

    ActiveRecord::FixtureSet.create_fixtures(fixture_path, fixtures)
  end
end
