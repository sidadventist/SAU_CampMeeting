import React, { useState, useRef } from 'react';
import { View, Button, Alert, StyleSheet, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Icon } from 'react-native-elements';
import FAS from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../components/constants';
// import * as constants from '../../components/constants'



// import { color } from 'react-native-reanimated';

const VideoPlayer = (props) => {
    const [playing, setPlaying] = useState(false);
    const [isMute, setMute] = useState(false);
    const controlRef = useRef();


    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('The End', 'The video has finished playing!');
        }
        if (state !== 'playing') {
            setPlaying(false);
        }
    }

    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    }

    const seekBackAndForth = (control) => {
        // console.log('currentTime');
        controlRef.current?.getCurrentTime().then((currentTime) => {
            control === 'forward'
                ? controlRef.current?.seekTo(currentTime + 15, true)
                : controlRef.current?.seekTo(currentTime - 15, true);
        });
    };

    const muteVideo = () => setMute(!isMute);
    const ControlIcon = ({ name, onPress }) => (
        <FAS onPress={onPress} name={name} size={40} color={isMute ? COLORS.secondaryText : COLORS.primaryText} />
    );

    const ControlIcon2 = ({ name, onPress }) => (
        <Icon onPress={onPress} name={name} size={40} color={isMute ? COLORS.secondaryText : COLORS.primaryText} />
    );
    return (
        <View>
            <YoutubePlayer
                height={300}
                ref={controlRef}
                play={playing}
                onFullScreenChange={togglePlaying}
                mute={isMute}

                forceAndroidAutoplay
                videoId={props.route.params.snippet.resourceId.videoId}
                onChangeState={onStateChange}
            />
            <Text style={{ alignSelf: 'center', marginBottom: 15 }}>{props.route.params.snippet.title}</Text>
            <View style={styles.controlContainer}>

                <ControlIcon
                    onPress={() => seekBackAndForth('rewind')}
                    color={COLORS.accent}
                    name="backward"
                />
                {/* <ControlIcon
                    onPress={togglePlaying}
                    color={COLORS.accent}
                    name={playing ? 'pause' : 'play'}
                /> */}
                <ControlIcon
                    onPress={() => seekBackAndForth('forward')}
                    color={COLORS.accent}
                    name="forward"
                />
            </View>
            <ControlIcon2
                onPress={muteVideo}
                color={isMute ? COLORS.accent : COLORS.secondaryText}
                name={isMute ? 'volume-up' : 'volume-off'}
            />
        </View>
    );
};

export default VideoPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryText,
    },
    controlContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});