Rails.application.routes.draw do
<<<<<<< HEAD

  get 'blog/index'

  #Here's a URL route (routing to a controller), to: specifies where to perform some action, we just named our
  #controller 'bloggers'
  get 'bloggers', to: 'bloggers#index'

  #this takes a param(id), :id is a placeholder for the id num
  get 'bloggers/:id', to: 'bloggers#show', as: 'blogger'

  get 'blogs/:id', to: 'blogs#show', as: 'blog'





=======
  get '/bloggers/:id', to: 'bloggers#show', as: 'blogger'

  get '/bloggers', to: 'bloggers#index'

  get '/blogs/:id', to: 'blogs#show', as: 'blog'
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362

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
