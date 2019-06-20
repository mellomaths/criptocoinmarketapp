module Api
    module V1
        class UpdateCryptosController < ApplicationController
            
            def create 
                render json: { cryptos: 'Ok' }, status: :ok
            end

        end
    end
end