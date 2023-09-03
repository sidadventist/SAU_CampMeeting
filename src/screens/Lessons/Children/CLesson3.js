import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';

import CustomHTML from '../../../components/CustomHTML';
import Lesson1 from '../../../Data/ChildrenLessons/CLesson3.json'
import htmlContent from '../../../Data/ChildrenLessons/CLesson3';
import styles from '../../../components/styles';

export default class Lesson1View extends Component {

    render() {
        const source = { html: htmlContent }
        const window = Dimensions.get('window').width
        const height = Dimensions.get('window').height
        return (<React.Fragment>

            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.postContent}>
                        <Text style={styles.postTitle}>
                            {Lesson1.title}
                        </Text>
                        {/* <Text style={styles.postSubTitle}>
              {Lesson1.subTitle}
            </Text> */}
                        <Text style={styles.date}>
                            {Lesson1.author}
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
}

