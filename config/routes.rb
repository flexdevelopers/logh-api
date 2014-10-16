LoghApi::Application.routes.draw do

  get '/', to: redirect('/')

  namespace :api, defaults: {format: 'json'} do

    match '/docs', to: 'docs#index', via: 'get'

    resources :sessions, only: [:create] do
      post 'reset', on: :collection, to: 'sessions#reset'
      delete 'destroy', on: :collection, to: 'sessions#destroy'
    end

    resources :users, only: [:create] do
      get 'current', on: :collection, to: 'users#current'
      put 'current', on: :collection, to: 'users#update'
      put 'contact', on: :collection, to: 'users#contact'
    end

    resources :seasons, only: [] do
      get 'current', on: :collection, to: 'seasons#current'
      resources :leagues, only: [:index, :show, :create, :update, :destroy] do
        get 'managed', on: :collection, to: 'leagues#managed'
        get 'public', on: :collection, to: 'leagues#public'
        get 'private', on: :collection, to: 'leagues#private'
        get 'open', on: :member, to: 'leagues#open'
        get 'close', on: :member, to: 'leagues#close'
        put 'contact', on: :member, to: 'leagues#contact'
        put 'message', on: :member, to: 'leagues#message'
      end
      resources :teams, only: [] do
        get 'all', on: :collection, to: 'teams#all'
        get 'alive', on: :collection, to: 'teams#alive'
        get 'dead', on: :collection, to: 'teams#dead'
      end
      resources :weeks, only: [:index, :show] do
        get 'available', on: :collection, to: 'weeks#available'
      end
    end

    resources :leagues, only: [] do
      resources :teams, only: [:index, :show, :create, :update, :destroy] do
        put 'activate', on: :member, to: 'teams#activate'
        put 'deactivate', on: :member, to: 'teams#deactivate'
        put 'paid', on: :member, to: 'teams#paid'
        put 'unpaid', on: :member, to: 'teams#unpaid'
        put 'message', on: :member, to: 'teams#message'
        put 'contact', on: :member, to: 'teams#contact'
      end
      resources :invitations, only: [:index, :create, :destroy] do
        post 'new', on: :collection, to: 'invitations#new'
      end
    end

    resources :teams, only: [] do
      resources :picks, only: [:index, :show, :create, :destroy]
    end

    resources :weeks, only:[] do
      resources :games, only: [:index, :show]
    end

    resources :games, only:[] do
      get 'current', on: :collection, to: 'games#current'
    end

    namespace :admin do

      resources :users, only: [:index, :show, :update, :destroy]

      resources :seasons, only: [:index, :show, :create, :update, :destroy] do
        resources :weeks, only: [:create, :update, :destroy] do
          put 'complete', on: :member, to: 'weeks#complete'
          put 'remind', on: :member, to: 'weeks#remind'
        end
      end

      resources :weeks, only:[] do
        resources :games, only: [:create, :update, :destroy]
      end

      resources :leagues, only: [:index]

    end

  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
