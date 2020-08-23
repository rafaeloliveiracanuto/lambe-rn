import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }}
                style={styles.avatar} />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    )
}