import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Alert } from 'react-native'
import CustomText from '../components/CustomText'
import { connect } from 'react-redux'
import { Button, Divider, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../components/constants'
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const clearOnBoarding = async () => {
    try {
        await AsyncStorage.removeItem('alreadyLaunched')

    } catch (err) {
        console.log('error alreadyLaunched', err)

    }
}
class SettingsScreen extends Component {
    render() {
        return (
            <View style={[styles.container, { justifyContent: 'space-between' }]}>
                <View style={{ justifyContent: 'center', alignSelf: 'center', width: width }}>
                    <Button onPress={clearOnBoarding} style={{ height: 190 }}>clear</Button>
                    <View style={{ padding: 25, }}>
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ fontSize: width * 0.05 }}>Font Size</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <Button icon={<Icon name='arrow-up' size={20} color='white' />}

                                    buttonStyle={{ borderRadius: 15 }}
                                    onPress={() => this.props.increaseFontSize()} />
                                <View style={{ margin: 10 }}></View>
                                <Button icon={<Icon name='arrow-down' size={20} color='white' />}

                                    buttonStyle={{ borderRadius: 15 }}
                                    onPress={() => this.props.decreaseFontSize()} />
                            </View>
                        </View>
                    </View>

                    <View style={{ width: width * .9, borderColor: "#d4d4d4", borderBottomWidth: 1, alignSelf: 'center', }} />

                    <View style={{ height: 60, alignSelf: 'center' }}>
                        <CustomText>Sample Text</CustomText>
                    </View>

                    {/* <Button title="Send Email Feedback" onPress={() => Linking.openURL('mailto:appdev@nzc.adventist.org?subject=SAU Camp Meeting app feedback')} /> */}
                    <Divider style={{ marginVertical: "2%" }} />
                    {/* <Button title="About Developer" onPress={() => { this.props.navigation.navigate('AboutUs') }} /> */}
                </View>
                <View >
                    <View style={{ width: width, borderColor: "#d4d4d4", borderBottomWidth: 1, alignSelf: 'center', backgroundColor: COLORS.primaryText }} ><Text style={{ alignSelf: 'center', color: COLORS.secondary }}></Text></View>
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseFontSize: () => dispatch({ type: 'INCREASE_FONT_SIZE' }),
        decreaseFontSize: () => dispatch({ type: 'DECREASE_FONT_SIZE' })
    }
}

export default connect(null, mapDispatchToProps)(SettingsScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: height,
        width: width,
        backgroundColor: '#EEEEEE',

        // justifyContent: 'center',
        // justifyContent: 'space-evenly',
        // backgroundColor: constants.gray,

    }
})