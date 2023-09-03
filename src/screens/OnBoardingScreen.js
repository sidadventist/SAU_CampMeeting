
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions()
    const Done = ({ ...props }) => (
        <TouchableOpacity style={{ marginHorizontal: 15, paddingRight: 10 }} {...props}>
            <Text style={{ fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
    )
    const Dots = ({ selected }) => {

        let backgroundColor;
        backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'
        return (
            <View
                style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }}
            />
        )

    }

    return (
        <Onboarding style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            DotComponent={Dots}
            DoneButtonComponent={Done}
            // NextButtonComponent={Next}
            // SkipButtonComponent={Skip}
            onSkip={() => navigation.replace('Main')}
            onDone={() => navigation.replace('Main')}
            pages={[
                {
                    backgroundColor: '#005151',
                    image: <Image source={require('../../assets/img/tent.png')} style={{ width, height: height * 0.4, resizeMode: 'contain' }} />,
                    title: 'Stay connected',
                    subtitle: 'Thank you for downloading this App.\nYour Companion for the NZC Camp Meeting',
                },
                {
                    backgroundColor: '#515151',
                    image: <Image source={require('../../assets/img/tents3.jpeg')} style={{ width, height: height * 0.4, resizeMode: 'contain' }} />,
                    title: 'Get Inspired',
                    subtitle: 'Packed with resources to keep you up to date with the NZC Camp Meetings ',
                },
                {
                    backgroundColor: '#fef0f0',
                    image: <Image source={require('../../assets/img/logo.png')} style={{ width, height: height * 0.4, resizeMode: 'contain' }} />,
                    title: 'I Will Go With Christ',
                    subtitle: 'Camp Meeting 2023 ',
                },

            ]}
        />
    )
}

export default OnboardingScreen

