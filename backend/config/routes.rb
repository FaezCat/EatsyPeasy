Rails.application.routes.draw do

  resources :polls, only: [:index, :create, :show, :update, :results]
  resources :users, only: [:index, :create]
  
  post 'polls/create' => 'polls#create'
  get 'polls/show/:alpha_numeric_id' => 'polls#show'
  post 'polls/update' => 'polls#update'
  get 'polls/show/:alpha_numeric_id/results' => 'polls#results'

end
