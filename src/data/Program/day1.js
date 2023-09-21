import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

// import { PROGRAM_DATA } from '../../data/Program/ProgramData';
// import Text from '../../components/CustomText';
import { COLORS } from '../../components/constants';
import { dailyData } from './dailyData';


const PROGRAM_DATA = [
    {
        startTime: '18:00',
        endTime: '19:00',
        date: 'Sunday, 10 Sept 2023',
        title: 'Opening Service - GauTV',
        speaker: 'Dr D P Shongwe',
        bgColor: `${COLORS.primary}`,
    },
]
const Day1 = () => {



    const renderClassItem = ({ item }) => (
        // <TouchableOpacity onPress={() => showAlert('row')}>
        <View style={styles.eventBox}>
            <View style={styles.eventDate}>
                <Text style={styles.eventDay}>{dailyData[0].day}</Text>
                <Text style={styles.eventMonth}>{dailyData[0].month}</Text>
            </View>
            <View style={styles.eventContent}>
                <Text style={styles.eventTime}>{item.startTime} - {item.endTime}</Text>
                <Text style={styles.userName}>{item.speaker}</Text>
                <Text style={styles.description}>
                    {item.title}
                </Text>
            </View>
        </View>
        // </TouchableOpacity>
    );

    renderItemSeparator = ({ item }) => (
        <View style={styles.separatorContainer}>
            <View style={styles.timelineLine}></View>
        </View>
    )

    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>Timeline</Text>

            <FlatList
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                ItemSeparatorComponent={renderItemSeparator}
                data={PROGRAM_DATA}
                renderItem={renderClassItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 6,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
        marginLeft: 16
    },
    card: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff7f50',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        padding: 16,

    },
    header: {
        marginBottom: 8,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        fontSize: 12,
        color: '#ffffff',
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 8,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    userRole: {
        fontSize: 12,
        color: '#ffffff',
    },
    classItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timelineContainer: {
        width: 30,
        alignItems: 'center',
    },
    separatorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    timelineLine: {
        flex: 1,
        width: 8,
        height: 60,
        backgroundColor: '#A9A9A9',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,

    },
    classContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },


    cardTitle: {
        fontSize: 16,
        color: '#00008B',
        marginBottom: 4,
    },
    cardDate: {
        fontSize: 12,
        color: '#00008B',
        marginBottom: 8,
    },
    cardSpeaker: {
        fontSize: 12,
        color: COLORS.primaryText,
        marginBottom: 8,
        fontWeight: '700'
    },
    studentListContainer: {
        marginRight: 10,
    },
    studentAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: -3,
        borderWidth: 1,
        borderColor: '#fff'
    },
    eventList: {
        marginTop: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        fontSize: 50,
        color: COLORS.primary,
        fontWeight: '600',
    },
    eventMonth: {
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '600',
        alignSelf: 'center'
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
    },
    description: {
        fontSize: 15,
        color: '#646464',
    },
    eventTime: {
        fontSize: 18,
        color: '#151515',
    },
    userName: {
        fontSize: 16,
        color: '#151515',
    },
})

export default Day1;