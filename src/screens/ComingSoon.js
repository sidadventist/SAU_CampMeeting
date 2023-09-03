import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import styles from '../components/styles';

export default class ComingSoon extends Component {

    render() {
        return (


            <View style={styles.container}>
                <View style={{ justifyContent: 'center', flex: 1, alignContent: 'center', alignItems: 'center' }}>

                    <Image
                        style={styles.tinyLogo2}
                        source={require('../../assets/img/build.png')}
                    />
                    {/* <Text style={styles.title}>Coming Soon</Text> */}
                    <Text style={[styles.description, { textAlign: 'center' }]}>{`Sorry this feature is not yet available.\nIt will be coming soon in an update`}</Text>
                    <TouchableHighlight
                        style={[styles.buttonContainer, styles.loginButton, { marginTop: 15 }]}
                        onPress={() => { this.props.navigation.navigate('Home') }}
                    >
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableHighlight>
                </View>
            </View>

        )
    }
}


