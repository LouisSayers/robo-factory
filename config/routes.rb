Rails.application.routes.draw do
  match '/robots', to: 'batch#show', via: [:get], defaults: { format: 'json' }
  match '*path', to: 'home#index', via: [:get]
  root to: 'home#index'
end
