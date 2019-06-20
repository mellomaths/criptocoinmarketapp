module Api
    module V1
        class CryptosController < ApplicationController
            
            def index 
                render json: { cryptos: 'Ok' }, status: :ok
            end

        end
    end
end