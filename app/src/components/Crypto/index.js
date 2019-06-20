import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

import CryptoList from './CryptoList';

export default class Crypto extends Component {
    state = {
        crytos: []
    };

    async componentDidMount() {
        const response = await axios.get('http://localhost:3000/api/v1/cryptos');
        this.setState({ crytos: response.data.cryptos });
    }

    render() {
        return <CryptoList cryptos={this.state.crytos} />;
    }
}

const styles = StyleSheet.create({});
