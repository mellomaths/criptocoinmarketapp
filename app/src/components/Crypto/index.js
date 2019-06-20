import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import CryptoList from './CryptoList';

export default class Crypto extends Component {
    state = {
        crytos: [
            { id: 1, position: 1, name: 'Bitcoin', price: 35887.94 },
            { id: 2, position: 2, name: 'Etherium', price: 1030.69 },
            { id: 3, position: 3, name: 'XRP', price: 1.64 },
            { id: 4, position: 4, name: 'Litecoin', price: 517 },
            { id: 5, position: 5, name: 'Bitcoin Cash', price: 1575.7 },
            { id: 6, position: 6, name: 'EOS', price: 25.9 },
            { id: 7, position: 7, name: 'Binance Coin', price: 139.6 },
            { id: 8, position: 8, name: 'Bitcoin SV', price: 820.21 },
            { id: 9, position: 9, name: 'Tether', price: 3.85 },
            { id: 10, position: 10, name: 'Stellar', price: 0.47 }
        ]
    };

    render() {
        return <CryptoList cryptos={this.state.crytos} />;
    }
}

const styles = StyleSheet.create({});
