import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Header extends Component {
    render() {
        return <Text style={styles.header}>{this.props.title}</Text>;
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 33,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#772953',
        padding: 20,
        color: '#F5FCFF'
    }
});
