import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import CrytoCoin from './CryptoCoin';

export default class CryptoList extends Component {
    render() {
        let { cryptos } = this.props;
        cryptos = cryptos.sort((prevCrypto, crypto) => prevCrypto.position - crypto.position);

        return (
            <View style={styles.crytoCoinList}>
                {cryptos.map(cryto => (
                    <CrytoCoin crypto={cryto} key={cryto.id} />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    crytoCoinList: {
        marginTop: 20
    }
});
