import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
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

    onRefreshPress = async () => {
        await axios.post('http://localhost:3000/api/v1/update_cryptos', {});
        const response = await axios.get('http://localhost:3000/api/v1/cryptos');
        this.setState({ crytos: response.data.cryptos });
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onRefreshPress}
                    title="Refresh"
                    color="#ff4081"
                    accessibilityLabel="Learn more about this purple button"
                />
                <CryptoList cryptos={this.state.crytos} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20
    }
});
