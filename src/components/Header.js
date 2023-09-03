import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS, SIZES, ORGDETAILS, FONT } from './constants';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
const image = require('../../assets/img/tents2.png')
const logo = require('../../assets/img/logo.png')

const Header = ({ children, press, icon }) => {
    const pressingEvent = () => { navigation.goBack() }
    // const settingPress = () => { navigation.navigate('Settings') }
    const navigation = useNavigation()
    return (
        <View style={styles.hContainer}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.imageIcon}>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={logo} style={[styles.tinyLogo, { marginHorizontal: 10 }]} />
                        <View style={{ justifyContent: 'center', flexShrink: 1 }}>

                            <Text style={[styles.themeText, { fontSize: FONT.small, flexWrap: 'wrap' }]}>{ORGDETAILS.orgName}</Text>
                            <Text style={styles.themeText}>Camp Meeting 2023</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.themeTitle}>{ORGDETAILS.theme}</Text>
                <View style={styles.header}>
                    <View style={styles.button}>
                        {/* <MCI name={icon} size={35} color={COLORS.secondary} onPress={pressingEvent} /> */}
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.text}>{children}</Text>
                    </View>
                    {/* Settings icon */}
                    {/* <View style={styles.button}>
                    <MaterialCommunityIcons name={'cog'} size={35} color={COLORS.secondary} onPress={settingPress} />
                </View> */}
                    {/* <Image source={require('../../assets/bible.jpeg')} style={{ width: 81, maxHeight: 80, borderRadius: 5 }} /> */}
                </View>
            </ImageBackground>

        </View>
    );
};

export default Header;
