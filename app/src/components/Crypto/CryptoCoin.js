import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class CryptoCoin extends Component {
    render() {
        const { crypto } = this.props;
        const { id, position, name, symbol, price, market_cap } = crypto;

        return (
            <View style={styles.cryptoContainer}>
                <Text style={styles.cryptoPosition}>{`#${position}`}</Text>
                <Text style={styles.crytoName}>
                    {name} ({symbol})
                </Text>

                <View>
                    <Text style={styles.field}>
                        Price: <Text style={styles.fieldValue}>R$ {price}</Text>
                    </Text>
                    <Text style={styles.field}>
                        Market Cap: <Text style={styles.fieldValue}>R$ {market_cap}</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cryptoContainer: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#772953',
        borderRadius: 3
    },
    cryptoPosition: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F5FCFF',
        textAlign: 'right'
    },
    crytoName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#F5FCFF'
    },
    field: {
        color: '#F5FCFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    fieldValue: {
        color: '#F5FCFF',
        fontSize: 17
    }
});
