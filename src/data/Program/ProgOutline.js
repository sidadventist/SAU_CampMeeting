import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import { COLORS } from '../../components/constants'
import { useNavigation } from "@react-navigation/native"
import { dailyData } from './dailyData'
import FAS from 'react-native-vector-icons/Feather'
export default ListEvents = () => {
    const data = dailyData

    const [posts, setPosts] = useState(data)
    const navigation = useNavigation();
    const clickEventListener = item => {
        navigation.navigate(`${item.nav}`)
    }

    // const __getCompletedIcon = item => {
    //     if (item.completed == 1) {
    //         return 'https://img.icons8.com/flat_round/64/000000/checkmark.png'
    //     } else {
    //         return 'https://img.icons8.com/color/70/000000/delete.png'
    //     }
    // }

    // const __getDescriptionStyle = item => {
    //     if (item.completed == 1) {
    //         return { textDecorationLine: 'line-through', fontStyle: 'italic', color: '#808080' }
    //     }
    // }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.tasks}
                columnWrapperStyle={styles.listContainer}
                data={posts}
                keyExtractor={item => {
                    return item.id
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={[styles.card, { borderColor: item.color, flex: 1 }]}
                            onPress={() => clickEventListener(item)}>
                            {/* <Image style={styles.image} source={{ uri: __getCompletedIcon(item) }} /> */}


                            <View style={styles.cardContent}>

                                <Text style={[styles.description]}>
                                    {item.description}
                                </Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                            <FAS name='chevron-right' style={{ marginRight: 15 }} size={30} color={COLORS.gray} />

                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#eeeeee',
    },
    tasks: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 1,
    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: 'white',
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    description: {
        fontSize: 18,
        flex: 1,
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: COLORS.gray,
        marginTop: 5,
    },
})

