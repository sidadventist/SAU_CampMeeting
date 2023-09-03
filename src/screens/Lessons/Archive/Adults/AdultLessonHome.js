import { View, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
// import styles from '../../../../components/styles'
import { useNavigation } from '@react-navigation/native'
import { aDATA } from '../../../../data/Lessons/Archive/LessonList'
import Text from '../../../../components/CustomText'
import CustomActivityIndicator from '../../../../components/CustomActivityIndicator'
import { Divider } from 'react-native-elements'
import { COLORS } from '../../../../components/constants'

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
            // <TouchableOpacity onPress={() => navigation.navigate(`${item.nav}`)}>
            //     <View style={styles.listContainer}>
            //         <Text style={styles.listTitle}>{item.title}</Text>
            //         <Text style={styles.listSubTitle}>{item.author}</Text>
            //         <Text style={styles.description2}>{item.year}</Text>
            //     </View>
            // </TouchableOpacity>


            <View style={styles.card}>
                <View>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate(`${item.nav}`)}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text fontWeight={400} color='white' style={{ marginBottom: 3, fontWeight: '400', color: 'white' }}>Lesson {item.LessonNum}</Text>
                                    <Text fontWeight={100} color='white' style={{ marginBottom: 3, fontWeight: '100', color: 'white' }}>{item.year}</Text>
                                </View>
                                <Text fontWeight='bold' color='white' style={styles.buttonText}>{item.title}</Text>
                            </TouchableOpacity>
                            <Divider style={{ marginVertical: 23 }} />
                            <TouchableOpacity style={[styles.button, { marginBottom: 3 }]} onPress={() => navigation.navigate(`${item.navs}`)}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text color='white' fontWeight={400} style={{ marginBottom: 3 }}>Chidzidzo {item.LessonNum}</Text>
                                    <Text fontWeight={100} color='white' style={{ marginBottom: 3 }}>{item.year}</Text>
                                </View>
                                <Text style={styles.buttonText} fontWeight='bold' color='white' >{item.stitle}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
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
            {/* <Image
                style={styles.tinyLogo3}
                source={require('../../../../assets/img/logo22.png')}
            /> */}
            <View style={{ flex: 1, }}>
                {/* <ListItem title={"hello"} subTitle={'world'} /> */}
                <FlatList style={{ flex: 1, }}
                    data={aDATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        color: '#c4c5c6',
        marginHorizontal: 20,
    },
    card: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
        marginTop: 5
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    itemContent: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: '#999',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
