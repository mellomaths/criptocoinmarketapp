class CoinMarketApi
    include HTTParty

    base_uri "http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings"
    
    def latest(limit, convert)
        headers = {
            "X-CMC_PRO_API_KEY" => "73704e7d-eb52-400d-8867-f4e35358c825",
            "Content-Type" => "application/json"            
        }

        query = {
            "start" => "1",
            "limit" => limit,
            "convert" => convert
        }

        response = self.class.get('/latest', 
            :query => query,
            :headers => headers,
            :verify => false,
            format: :plain
        )
        parsed_response = JSON.parse(response.body)
        parsed_response["data"]
    end
end
