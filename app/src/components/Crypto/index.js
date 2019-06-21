import React, { Component } from 'react';
import { StyleSheet, Button, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import CryptoList from './CryptoList';

export default class Crypto extends Component {
    state = {
        crytos: [],
        showList: true,
        isRefreshing: false
    };

    async componentDidMount() {
        const response = await axios.get('http://localhost:3000/api/v1/cryptos');
        this.setState({ crytos: response.data.cryptos });
    }

    onRefreshPress = async () => {
        this.setState({ showList: false, isRefreshing: true });
        await axios.post('http://localhost:3000/api/v1/update_cryptos', {});
        const response = await axios.get('http://localhost:3000/api/v1/cryptos');
        this.setState({ crytos: response.data.cryptos, showList: true, isRefreshing: false });
    };

    _renderRefreshIndicator() {
        const { isRefreshing } = this.state;

        if (isRefreshing) {
            return (
                <View style={styles.refreshIndicator}>
                    <ActivityIndicator size="large" color="#772953" />
                </View>
            );
        }

        return null;
    }

    _renderCryptoCoinList() {
        const { showList } = this.state;

        if (showList) {
            return <CryptoList cryptos={this.state.crytos} />;
        }

        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onRefreshPress}
                    title="Refresh"
                    color="#ff4081"
                    accessibilityLabel="Refresh cryptocurrencies info"
                />
                {this._renderCryptoCoinList()}
                {this._renderRefreshIndicator()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20
    },
    refreshIndicator: {
        marginTop: 30,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
