Rails.application.routes.draw do
  match '*path', to: 'home#index', via: [:get]
  root to: 'home#index'
end
