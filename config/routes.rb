Rails.application.routes.draw do
  root 'tomatoes#index'
  resources :tomatoes
end
