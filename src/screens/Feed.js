import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Economic Student',
            email: 'economicStudent@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Ludwig von Mises',
                comment: 'Very competitive!'
            }, {
                nickname: 'Karl Marx',
                comment: 'Beautiful photo! Can you share with me?'
            }]
        }, {
            id: Math.random(),
            nickname: 'Philosophy Student',
            email: 'philosophyStudent@gmail.com',
            image: require('../../assets/imgs;bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}