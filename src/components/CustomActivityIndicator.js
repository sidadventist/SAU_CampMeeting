import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import styles from './styles'

const CustomActivityIndicator = () => {

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color={'blue'} size="large" />
            <Text>Loading...</Text>

        </View>

    )
}

export default CustomActivityIndicator