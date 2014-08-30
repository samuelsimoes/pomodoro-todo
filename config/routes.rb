Rails.application.routes.draw do
  root 'pomodoro_lists#index'

  resources :pomodoro_lists do
    member do
      get :running_pomodoro
    end

    resources :pomodoros do
      post :update_collection_order, on: :collection

      member do
        put :stop
        put :start
        put :cancel
      end
    end
  end
end
