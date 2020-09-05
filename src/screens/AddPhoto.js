import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Choose an image',
            maxHeight: 800,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Image added', this.state.comment)
    }

    render() {
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share an image</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                </View>
                <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Choose the photo</Text>
                </TouchableOpacity>
                <TextInput placeholder='Do you have any comment to the photo?'
                    style={styles.input} value={this.state.comment}
                    onChangeText={comment => this.setState({ comment })} />
                <TouchableOpacity onPress={this.save} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: height * 0.53,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: width * 0.9,
        height: height * 0.53,
        resizeMode: 'center'
    },
    button: {
        width: '50%',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '75%',
        alignSelf: 'center',
    }
})

export default AddPhoto