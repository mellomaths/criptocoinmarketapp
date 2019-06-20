import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Header from './components/Header';

export default class App extends Component {
    state = {
        title: 'Crypto Coin Market App'
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title={this.state.title} />
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
