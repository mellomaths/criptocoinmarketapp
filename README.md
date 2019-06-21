# Crypto Coin Market App

A Ruby on Rails and React Native App to list price of the top 10 most important cryptocurrencies based on market capitalization according to [CoinMarketCap](https://coinmarketcap.com/pt-br/).

The app consumes the CoinMarketCap REST API, see the documentation [here](https://coinmarketcap.com/api/documentation/v1/#).

## Guides

### Table of Contents

- [Quick Start](#quick-start)
- [Running locally](#running-the-application-locally)
- [Possible problems and solutions](#possible-problems-and-solutions)

### Quick start

The Rails REST has two endpoints:

One for getting the cryptocurrencies stored on database: `/cryptos`.
And the other to update the price, market cap and its position based on market cap: `/update_crytos`. The server will get this information from the CoinMarketCap REST API and store on the database.

See a further documentation here.

The React Native App will consume this API and show the data to the user.

### Running the application locally

#### System requirements

You need to have in your machine:
- [Android Studio](https://developer.android.com/studio)
- [MySQL Server](https://www.mysql.com/)
- [Ruby On Rails](http://railsinstaller.org/)
- [Node.js](https://nodejs.org/)

> Note: MySQL is option since you can configure a different database for the Active Record.

#### Clone the repository

```bash
git clone https://github.com/mellomaths/criptocoinmarketapp.git
cd cryptocoinmarketapp
```

#### Configure the mysql2 adapter

> Note: If you don't have MySQL Server, you can use the `sqlite3` gem. Read more [here](#set-sqlite3-on-rails-server). If you are going to configure a different database as the database for Active Record, you should do that before the rest of the tutorial.

In the `/server/config/database.yml` file, set the variables `username` and `password` to your local MySQL Database configuration.

```yml
default: &default
  ...
  username: <YOUR-DATABASE-USERNAME>
  password: <YOUR-DATABASE-PASSWORD>
  host: localhost
```

#### Rails Database Creation and Migration

```bash
cd server
rake db:create
rake db:migrate
```

#### Installing Rails dependencies

```bash
bundle install
```


#### Running the Rails REST API

```
rails s
```

#### Installing the mobile App dependencies

```bash
cd app
npm install
```

Using Yarn:
```bash
yarn install
```


#### Start your android emulator

After starting the emulator (like [Genymotion](https://www.genymotion.com/)), you should map the Rails REST API port to the deviced started.

```bash
adb reverse tcp:3000 tcp:3000
```

#### Run the android project

```bash
cd cryptocoinmarketapp
npm run android
```

And should be all set and running.

### Possible problems and solutions

#### Set sqlite3 on Rails Server

In the `/server/config/database.yml` file, you should find a `adapter` variable configured to use the `mysql2`. Change that to `sqlite3` like the example below and delete the variables `username` and `password` as they are not needed.

```yml
default: &default
  adapter: 'sqlite3'
  ...
```

In the `/server/Gemfile` file, replace the `gem 'mysql2', '>= 0.3.18', '< 0.6.0'` line to `gem 'sqlite3'`.
