Rails.application.routes.draw do
  resources :tags
  resources :notes
  resources :note_tags
  resources :current_users
  resources :user_notes

  devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'
end
