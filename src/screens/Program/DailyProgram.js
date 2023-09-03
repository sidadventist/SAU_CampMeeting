import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, FlatList } from 'react-native'
import Text from '../../components/CustomText'
export default function DailyProgram() {
    const data = [

        { id: 0, presenter: '', description: 'Prayer Band', time: '0400 - 0430' },
        { id: 1, presenter: '', description: 'Morning Manna', time: '0430 - 0500' },
        { id: 2, presenter: '', description: 'Breakfast', time: '0700 - 0800' },
        { id: 3, presenter: '', description: 'Bible Reading', time: '0815 - 0830' },
        { id: 4, presenter: '', description: 'Lesson', time: '0830 - 1030' },
        { id: 5, presenter: '', description: 'Theme Song - Hymn 112', time: '1030 - 1040' },
        { id: 6, presenter: '', description: 'Opening Prayer', time: '1040 - 1045' },
        { id: 7, presenter: '', description: 'Preaching Service', time: '1100 - 1200' },
        { id: 8, presenter: '', description: 'Lunch', time: '1200 - 1400' },
        { id: 9, presenter: '', description: 'Lesson', time: '1400 - 1500' },
        { id: 10, presenter: '', description: 'Prayer Session', time: '1500 - 1515' },
        { id: 11, presenter: '', description: 'Lesson', time: '1515 - 1600' },
        { id: 12, presenter: '', description: 'Games, Fellowship & Supper', time: '1600 - 1900' },
        { id: 13, presenter: '', description: 'Evening Service', time: '1900 - 2030' },
    ]

    const [comments, setComments] = useState(data)

    return (
        <FlatList
            style={styles.root}
            data={data}
            // extraData={this.state}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator} />
            }}
            keyExtractor={item => {
                return item.id
            }}
            renderItem={item => {
                const Notification = item.item
                return (
                    <View style={styles.container}>

                        <View style={styles.content}>
                            <View style={styles.contentHeader}>
                                <Text style={styles.name} fontWeight={'bold'}>{Notification.description}</Text>
                                <Text style={styles.time} >{Notification.time}</Text>
                            </View>
                            {/* <Text rkType="primary3 mediumLine">{Notification.comment}</Text> */}
                        </View>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22,
        marginLeft: 20,
    },
    time: {
        fontSize: 11,
        color: '#808080',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
