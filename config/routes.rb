Rails.application.routes.draw do
  match '/robots', to: 'batch#show', via: [:get], defaults: { format: 'json' }
  match '/robots/:id/extinguish', to: 'robots#extinguish', via: [:post], defaults: { format: 'json' }
  match '/robots/recycle', to: 'robots#recycle', via: [:post], defaults: { format: 'json' }

  match '/shipments/create', to: 'shipments#create', via: [:put], defaults: { format: 'json' }

  match '*path', to: 'home#index', via: [:get]
  root to: 'home#index'
end
