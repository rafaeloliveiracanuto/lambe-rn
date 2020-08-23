import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
            </View>
        )
    }
}