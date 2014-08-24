RSpec.configure do |config|
  config.before :suite do
    DatabaseRewinder.strategy = :truncate
    DatabaseRewinder.clean_all
  end

  config.after :each do
    DatabaseRewinder.clean
  end
end
