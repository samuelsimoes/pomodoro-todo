Rails.application.routes.draw do
  root 'tomatoes#index'
  resources :tomatoes do
    post :update_collection_order, on: :collection
  end
end
