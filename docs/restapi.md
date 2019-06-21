# Rails REST API Documentation

## **Get Cryptocurrencies**

Returns JSON formatted data with a list of all cryptocurrencies stored in the database.

-   **URL**

    /cryptos

-   **Method:**

    `GET`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200
    -   **Content:**
        ```json
        {
            "cryptos": [
                {
                    "id": 1,
                    "name": "Bitcoin",
                    "symbol": "BTC",
                    "position": 1,
                    "price": 36748.0,
                    "market_cap": 653030000000.0,
                    "created_at": "2019-06-20T19:51:10.000Z",
                    "updated_at": "2019-06-20T21:27:55.000Z"
                },
            ]
        }
        ```

## **Update Cryptocurrencies**

Stores the top 10 cryptocurrencies based on market cap from the CoinMarketCap REST API. If the cryto is already stored, the server will update its properties.

-   **URL**

    /update_cryptos

-   **Method:**

    `POST`

-   **URL Params**

    None

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200
    -   **Content:**
        ```json
        {
            "message": "Cryptos loaded successfully"
        }
        ```
