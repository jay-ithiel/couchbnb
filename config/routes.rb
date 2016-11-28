Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :home]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :update, :show, :index, :destroy]
    resources :bookings, only: [:create, :index, :show, :destroy] do
      patch 'approve'
      patch 'deny'
    end
  end
end
