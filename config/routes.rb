Rails.application.routes.draw do
  root "pages#index"
  get "inertia-example", to: "inertia_example#index"

  get "/about", to: "pages#about", as: "about"

  get "/sign_up", to: "users#new", as: "sign_up"
  post "/sign_up", to: "users#create"
  get "/sign_in", to: "sessions#new", as: "sign_in"
  post "/sign_in", to: "sessions#create"
  delete "/sign_out", to: "sessions#destroy", as: "sign_out"
end
