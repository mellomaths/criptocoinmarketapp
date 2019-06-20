import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Header from './components/Header';
import Crypto from './components/Crypto';

export default class App extends Component {
    state = {
        title: 'Crypto Coin Market'
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title={this.state.title} />
                <Crypto />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});
