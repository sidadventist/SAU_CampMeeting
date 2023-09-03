import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../../components/styles'
import { useNavigation } from '@react-navigation/native'
import { DATA } from '../../../Data/Archive/LessonList'
import CustomActivityIndicator from '../../../components/CustomActivityIndicator'

// const DATA = [
//     { id: 1, title: 'Going Home', subTitle: 'Dr O. Dzvairo', nav: 'YLesson1' },
//     { id: 2, title: 'Miracle or Work', subTitle: 'Dr C.N. Chingozha', nav: 'YLesson2' },
//     { id: 3, title: 'Peer Pressure', subTitle: 'Dr A. Dhar', nav: 'YLesson3' },
//     { id: 4, title: 'The "other" one', subTitle: 'Dr W. Luchano', nav: 'YLesson4' },
// ]


// const renderItem = ({item})=><ListItem ={item.title} subTitle={item.subTitle}/>
export default function YouthLessonList() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const renderItem = ({ item }) => {
        return (
            // <Item title={item.title} subTitle={item.subTitle} />
            <TouchableOpacity onPress={() => navigation.navigate(`${item.navy}`)}>
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{item.subTitle}</Text>
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