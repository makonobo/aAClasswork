Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/cats', 'cats#index' as cats
  resources :cats, only: [:index, :show, :new]
end
