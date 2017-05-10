Rails.application.routes.draw do
 namespace :api, defaults: { format: :json } do
   resources :guests, only: [:index, :show] do
     resources :gifts, only: [:index, :show]
   end

   resources :gifts, only: [:index, :show]
   resources :parties, only: [:index, :show]
 end
end
