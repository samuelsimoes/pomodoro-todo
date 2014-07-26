Rails.application.routes.draw do
  root 'pomodoro_lists#index'

  resources :pomodoro_lists do
    resources :tomatoes do
      post :update_collection_order, on: :collection

      member do
        put :stop
        put :start
        put :cancel
      end
    end
  end
end
