import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../components/constants';
import { PROGRAM_DATA } from '../../data/Program/ProgramData';
import Text from '../../components/CustomText';
const ScheduleScreen = () => {


    const renderClassItem = ({ item }) => (
        <View style={styles.classItem}>
            <View style={styles.classContent}>
                <View style={[styles.card, { backgroundColor: item.bgColor }]}>
                    <Text color='#00008B' fontWeight={800} style={styles.cardTitle}>{item.title}</Text>
                    <Text color='#00008B' style={styles.cardDate}>{item.date}</Text>
                    <Text color='#00008B' fontWeight={600} style={styles.cardDate}>{item.startTime} - {item.endTime}</Text>
                    <Text color={COLORS.primaryText} style={styles.cardSpeaker}>{item.speaker}</Text>
                </View>
            </View>
        </View>
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
});

export default ScheduleScreen;