# config/routes.rb
Rails.application.routes.draw do
  resources :lifts
  resources :mountains
  resources :events
  resources :users
  post "/signup", to: 'users#create'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end