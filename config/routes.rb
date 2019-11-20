Rails.application.routes.draw do
  devise_for :users
  root 'pages#home'

  namespace :api do
    resources :money, only: [:index, :create, :update, :destroy]
  end
end
