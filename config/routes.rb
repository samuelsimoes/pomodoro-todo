Rails.application.routes.draw do
  root 'pomodoro_lists#index'

  resources :tomatoes do
    post :update_collection_order, on: :collection

    member do
      put :stop
      put :start
      put :cancel
    end
  end

  resources :pomodoro_lists
end
