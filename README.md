# Crypto Coin Market App

A Ruby on Rails and React Native App to list price of the top 10 most important cryptocurrencies consuming the [CoinMarketCap](https://coinmarketcap.com/pt-br/).

- [Documentation for the CoinMarketCap REST API](https://coinmarketcap.com/api/documentation/v1/#)

## Guides

### Running the application locally

#### Requirements

You need to have in your machine:
- MySQL Server
- Ruby On Rails
- Node.js

#### Clone the repository

```bash
git clone https://github.com/mellomaths/criptocoinmarketapp.git
cd cryptocoinmarketapp
```

#### Rails Database Creation and Migration

```bash
cd server
rake db:create
rake db:migrate
```

#### Running the Rails REST API

```
rails s
```

#### Start your android emulator

After starting the emulator (like [Genymotion](https://www.genymotion.com/)), you should map the Rails REST API port: `3000` to the deviced started.

```bash
adb reverse tcp:3000 tcp:3000
```

#### Run the android project

```bash
cd cryptocoinmarketapp
npm run android
```

And should be all set and running.
