import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native';

import CustomHTML from '../../../../components/CustomHTML';
import { aDATA } from '../../../../data/Lessons/Archive/LessonList';
import htmlContent from '../../../../data/Lessons/Archive/AdultLessons/ALesson1';
import styles from '../../../../components/styles';
import CustomActivityIndicator from '../../../../components/CustomActivityIndicator';
// const img = `${require('../../../../assets/img/build.png')}`

export default function Lesson1View({ navigation }) {
    // const imageList = {
    //     logo: require('../../../../assets/img/logo22.png'),
    //     build: require('../../../../assets/img/build.png'),
    // }

    const source = { html: htmlContent }
    const window = Dimensions.get('window').width

    // const height = Dimensions.get('window').height

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 30);
        });

        return unsubscribe;
    }, [navigation]);


    if (loading) {
        return (
            <CustomActivityIndicator />
        )
    }
    return (<React.Fragment>

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.postContent}>
                    <Text style={styles.postTitle}>
                        {/* {Lesson1.title} */}
                        {aDATA[0].title}
                    </Text>
                    {/* <Text style={styles.postSubTitle}>
              {Lesson1.subTitle}
            </Text> */}
                    <Text style={styles.date}>
                        {aDATA[0].author}
                    </Text>
                    {/* <Text>{Lesson1.content}</Text> */}

                    <CustomHTML
                        contentWidth={window}
                        source={source}
                    // imgs={imageList.logo}
                    />
                </View>
            </View>
        </ScrollView>
    </React.Fragment>
    );
}




