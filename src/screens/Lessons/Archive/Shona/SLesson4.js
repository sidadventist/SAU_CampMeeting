import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView,
    Dimensions
} from 'react-native';

import CustomHTML from '../../../../components/CustomHTML';
import { aDATA } from '../../../../data/Lessons/Archive/LessonList';
import htmlContent from '../../../../data/Lessons/Archive/ShonaLessons/SLesson4';
import styles from '../../../../components/styles';
import CustomActivityIndicator from '../../../../components/CustomActivityIndicator';
export default function SNLesson4AView({ navigation }) {


    const source = { html: htmlContent }
    const window = Dimensions.get('window').width
    // const height = Dimensions.get('window').height
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // onload(loading)=setLoading(false)
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
                        {aDATA[3].stitle}
                    </Text>
                    {/* <Text style={styles.postSubTitle}>
              {Lesson1.subTitle}
            </Text> */}
                    <Text style={styles.date}>
                        {aDATA[3].author}
                    </Text>
                    {/* <Text>{Lesson1.content}</Text> */}

                    <CustomHTML
                        contentWidth={window}
                        source={source} />
                </View>
            </View>
        </ScrollView>
    </React.Fragment>
    );
}

