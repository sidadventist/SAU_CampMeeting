import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native';

import CustomHTML from '../../../components/CustomHTML';
// import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html';
import { DATA } from '../../../data/Lessons/LessonList';
import htmlContent from '../../../data/Lessons/AdultLessons/ALesson1';
import styles from '../../../components/styles';
import CustomActivityIndicator from '../../../components/CustomActivityIndicator';
// import { Input } from 'react-native-elements';
// const img = `${require('../../../../assets/img/build.png')}`

// const customHTMLElementModels = {

//     textarea: defaultHTMLElementModels.textarea.extend({
//         contentModel: HTMLContentModel.textual

//     })
// };
export default function Lesson1View({ navigation }) {
    // const imageList = {
    //     logo: require('../../../../assets/img/logo.png'),
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



    return (
        <React.Fragment>

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>

                            {DATA[0].title}
                        </Text>


                        <Text style={styles.date}>
                            {DATA[0].author}
                        </Text>


                        <CustomHTML
                            contentWidth={window}
                            source={source}
                        // customHTMLElementModels={customHTMLElementModels}
                        // customHTMLElementModels={'input'}
                        // imgs={imageList.logo}
                        />
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    );
}




