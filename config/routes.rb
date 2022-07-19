Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :workspaces, only: [:show]
    resources :initial_messages, only: [:show]
    resources :conversation_messages, only: [:create, :update, :destroy]
    resources :channel_messages, only: [:create, :update, :destroy]
  end
end
