module Api
    module V1
        class UpdateCryptosController < ApplicationController
            
            def create 
                coin_amount = 10
                currency_convertion = "BRL"

                crypto_coin_market_api = CoinMarketApi.new
                crypto_coins = crypto_coin_market_api.latest coin_amount, currency_convertion

                crypto_coins.each do |coin|

                    name = coin["name"]
                    position = coin["cmc_rank"]
                    price = coin["quote"][currency_convertion]["price"]
                    market_cap = coin["quote"][currency_convertion]["market_cap"]

                    crypto_saved = Crypto.find_by name: coin["name"]
                    if crypto_saved
                        crypto_saved.update_attributes({
                            name: name,
                            position: position,
                            price: price,
                            market_cap: market_cap                            
                        })
                    else
                        newCrypto = Crypto.create({
                            name: name,
                            position: position,
                            price: price,
                            market_cap: market_cap
                        })
                    end
                end

                render json: { message: 'Cryptos loaded successfully' }, status: :ok
            end

        end
    end
end