Rails.application.routes.draw do
  get 'tweets/index'
  root to: "tweets#index"
  resources :tweets do
    collection do
      get 'about'
    end
  end
end
