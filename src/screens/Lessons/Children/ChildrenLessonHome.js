import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../components/styles'
import { useNavigation } from '@react-navigation/native'



const DATA = [
    { id: 1, title: 'Home at Last', subTitle: 'Dr O. Dzvairo', nav: 'CLesson1' },
    { id: 2, title: 'Social Media and Me', subTitle: 'Dr G. Maurice', nav: 'CLesson2' },
    { id: 3, title: 'The Better Way', subTitle: 'Dr A. Heraldo', nav: 'CLesson3' },
    { id: 4, title: 'Children in Service', subTitle: 'Dr B. Muchena', nav: 'CLesson4' },
]


// const renderItem = ({item})=><ListItem ={item.title} subTitle={item.subTitle}/>
export default function ChildrenLessonList() {
    const navigation = useNavigation()
    const renderItem = ({ item }) => {
        return (
            // <Item title={item.title} subTitle={item.subTitle} />
            <TouchableOpacity onPress={() => navigation.navigate(`${item.nav}`)}>
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <Text style={styles.listSubTitle}>{item.subTitle}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (

        <View style={{ flex: 1, }}>
            <Image
                style={styles.tinyLogo}
                source={require('../../../../assets/img/tent.png')}
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