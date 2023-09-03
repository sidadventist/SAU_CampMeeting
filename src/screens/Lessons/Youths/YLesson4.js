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

import CustomHTML from '../../../components/CustomHTML';
// import Lesson1 from '../../../Data/YouthLessons/YLesson4.json'
// import Lesson1 from '../../../Data/AdultLessons/ALesson4.json'
// import htmlContent from '../../../Data/YouthLessons/YLesson4';
import htmlContent from '../../../data/Lessons/AdultLessons/ALesson4';
import styles from '../../../components/styles';
import { DATA } from '../../../data/Lessons/LessonList';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
export default function Lesson1View({ navigation }) {


    const source = { html: htmlContent }
    const window = Dimensions.get('window').width
    const height = Dimensions.get('window').height
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
                        {DATA[3].subTitle}
                    </Text>
                    {/* <Text style={styles.postSubTitle}>
              {Lesson1.subTitle}
            </Text> */}
                    <Text style={styles.date}>
                        {DATA[3].author}
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

