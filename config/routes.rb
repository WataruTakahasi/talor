Rails.application.routes.draw do
  root 'static_pages#home'
  get 'history', to:'static_pages#history'
  get 'users', to:'static_pages#users'
  get 'contact', to:'static_pages#contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
