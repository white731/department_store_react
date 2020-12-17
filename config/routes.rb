Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    # resources :things
    resources :departments do
        get 'sort_by_name'
        get 'sort_by_price'
      resources :items
    end
  end

end
