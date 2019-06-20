module Api
    module V1
        class CryptosController < ApplicationController
            
            def index 
                cryptos = Crypto.order('position')
                render json: { cryptos: cryptos }, status: :ok
            end

        end
    end
end