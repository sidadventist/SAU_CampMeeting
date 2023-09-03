import React, { Component } from "react";
import { View, Text, Dimensions } from 'react-native'
import styles from "../../components/styles";
import htmlContent from "../../data/ThemeSong/themeSongSN";
import CustomHTML from "../../components/CustomHTML";
import { SIZES } from "../../components/constants";
import { ScrollView } from "react-native";



export default class ThemeSongSN extends Component {
    render() {
        const source = { html: htmlContent }
        const window = SIZES.width

        return (
            <ScrollView style={styles.scrollview}>


                <CustomHTML
                    contentWidth={window}
                    source={source} />

            </ScrollView>
        )
    }
}
