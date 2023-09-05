import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../../components/constants';
// import { PROFILE_DATA } from '../../data/profiles/profiles'
const Resume = ({ navigation, route }) => {
    const img1 = route.params.data.icon
    const profileID = route.params.data
    // console.log(route.params)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.photo}
                    source={
                        img1

                    }
                />
                <Text style={styles.name}>{profileID.name}</Text>
                <Text style={styles.title}>{profileID.position}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Brief Bio</Text>
                    <View style={styles.sectionContent}>
                        <Text style={styles.sectionItem}>
                        </Text>
                        <Text style={styles.sectionItem}>
                            {profileID.description}
                        </Text>
                    </View>
                </View>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 4,
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: COLORS.gray,
        borderWidth: 0.2
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        justifyContent: 'center'
    },
    body: {},
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    sectionContent: {
        marginTop: 8,
    },
    sectionItem: {
        marginVertical: 4,
    },
    sectionItemTitle: {
        fontSize: 14,
        fontWeight: '600',
    },
    sectionItemDesc: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Resume;
