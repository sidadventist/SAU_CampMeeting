import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlayerModal = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 15, }}>
            <Text style={{ fontWeight: '900', letterSpacing: .5 }}>Swipe down to dismiss</Text>
        </View>
    )
}

export default PlayerModal

const styles = StyleSheet.create({})