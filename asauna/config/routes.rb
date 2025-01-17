Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :workspaces, only: [:show, :create, :update, :index] do 
      resources :projects, only: [:index, :create]
      resources :tasks, only: [:index, :create]
    end
    resources :projects, only: [:show, :update, :destroy]
    resources :tasks, only: [:show, :update, :destroy]
  end

end
