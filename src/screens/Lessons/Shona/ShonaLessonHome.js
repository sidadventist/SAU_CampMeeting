import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../../components/styles'
import { useNavigation } from '@react-navigation/native'
import { DATA } from '../../../data/Lessons/LessonList'

import CustomActivityIndicator from '../../../components/CustomActivityIndicator'
// const DATA = [
//     { id: 1, title: 'The seal of God and the mark of the beast', subTitle: 'Dr O. Dzvairo', nav: 'ALesson1' },
//     { id: 2, title: 'Church Governance and Policy', subTitle: 'Oswell Dzvairo, PhD', nav: 'ALesson2' },
//     { id: 3, title: 'Biblical principles of marriage', subTitle: 'Michael Rugube Ngwaru', nav: 'ALesson3' },
//     { id: 4, title: 'I WILL GO: Digitally', subTitle: 'Watson Mbiriri\nKudzai Carlos Chikumbirike', nav: 'ALesson4' },
// ]


// const renderItem = ({item})=><ListItem ={item.title} subTitle={item.subTitle}/>
export default function AdultLessonList() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const renderItem = ({ item }) => {
        return (
            // <Item title={item.title} subTitle={item.subTitle} />
            <TouchableOpacity onPress={() => navigation.navigate(`${item.navs}`)}>
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{item.stitle}</Text>
                    <Text style={styles.listSubTitle}>{item.author}</Text>
                </View>
            </TouchableOpacity>
        )
    }
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

        <View style={{ flex: 1, }}>
            <Image
                style={styles.tinyLogo}
                source={require('../../../../assets/img/logo.png')}
            />
            <View style={{ flex: 1, }}>
                {/* <ListItem title={"hello"} subTitle={'world'} /> */}
                <FlatList style={{ flex: 1, }}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}