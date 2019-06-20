Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :cryptos
      resources :update_cryptos
    end
  end
end
