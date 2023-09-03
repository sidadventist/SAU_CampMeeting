
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { COLORS } from '../components/constants';

const ProfileDetail = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.avatarContainer}>
                    {/* <Text style={styles.avatar}>RN</Text> */}
                    <Image
                        style={styles.avatarImg}
                        source={require('../../assets/itLogo.png')} />

                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Development Team</Text>
                </View>
                {/* <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Project Co-ordinator:</Text>
                    <Text style={styles.infoText}>Celesani Sibanda</Text>
                </View>
                <Text style={styles.infoText}>Central Zimbabwe Conference</Text> */}
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Project Coordinator:</Text>
                    <Text style={styles.infoText}>Celesani Sibanda</Text>
                </View>
                <Text style={styles.infoText}>Central Zimbabwe Conference</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Lead Developer:</Text>
                    <Text style={styles.infoText}>Greg Maurice</Text>
                </View>
                <Text style={styles.infoText}>North Zimbabwe Conference</Text>

                {/* <View style={styles.infoContainer}>
                    <Text style={styles.infoLabel}>Graphics & Media:</Text>
                    <Text style={styles.infoText}>Never Sibanda</Text>
                </View>
                <Text style={styles.infoText}>Zimbabwe Central Union Conference</Text> */}

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => Linking.openURL('mailto:appdev@nzc.adventist.org?subject=SAU Camp Meeting App Feedback')}
                >

                    {/* <Text style={{ color: 'white', fontWeight: '900', fontSize: 18 }}>
                        Send Email to the developer
                    </Text> */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Email Developer:</Text>
                        <Text style={styles.infoText}>appdev@nzc.adventist.org</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default ProfileDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F3',
    },
    body: {
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        borderRadius: 70,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 0.16,
    },
    avatarImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
        resizeMode: 'contain',
    },
    nameContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666666',
        marginRight: 8,
    },
    infoText: {
        fontSize: 16,
    },
});
