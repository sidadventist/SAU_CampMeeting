import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, RefreshControl, ActivityIndicator } from 'react-native';
import { Avatar, ListItem, Divider, Text } from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import TouchableScale from 'react-native-touchable-scale'
import { COLORS } from '../../components/constants';
import { KEY } from '../../../key';




const MAX_RESULT = 15; //the number of videos that will be listed
const PLAYLIST_ID = 'AIzaSyCccG44mQvGktbiQivgF3e5Xs9SgOKoHxY'//KEY.PLAYLIST_ID //playlist in the account
const API_KEY = 'AIzaSyCccG44mQvGktbiQivgF3e5Xs9SgOKoHxY'//KEY.API_KEY //the key to allow youtube to serve the videos 

export default class VideoPlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            loading: false,
            isRefreshing: false,
            error: ''
        }
    }
    componentDidMount() {
        this.fetchPlaylistData();
    }
    fetchPlaylistData = async () => {
        this.setState({ loading: true })
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
        const json = await response.json();
        this.setState({ videos: json['items'] });

        // console.log(json)
    };
    _onRefresh() {
        this.setState({ isFetching: true })
        this.fetchPlaylistData()
    }
    render() {
        if (!this.state.loading === true) {
            return (
                <>
                    <ActivityIndicator size='large' color="#0000ff" />
                    <Text style={{ alignSelf: 'center', marginTop: 10 }}> Loading...</Text>
                </>
            )
        } else {
            return (
                <SafeAreaView style={styles.safeArea}>
                    <Text style={{ color: COLORS.gray, alignSelf: 'center', fontSize: ScreenWidth * .02 }}>swipe down to refresh</Text>
                    <FlatList
                        data={this.state.videos}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._onRefresh.bind(this)} />
                        }
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={
                            ({ item }) =>
                                <View>
                                    <ListItem
                                        Component={TouchableScale}
                                        friction={90}
                                        tension={100}
                                        activeScale={0.85}
                                        color={COLORS.primary}
                                        onPress={() => this.props.navigation.navigate('Video Player', item)}
                                    >
                                        <Avatar source={{ uri: item.snippet.thumbnails.high.url }} size={'large'} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {item.snippet.title}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {item.snippet.channelTitle}
                                                {/* Zimbabwe East Union Conference */}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                    </ListItem>
                                    <Divider orientation="horizontal" />
                                </View>

                        }
                    />

                </SafeAreaView>
            );
        }
    }
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    demacate: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 20
    },
    item: {
        padding: 10,
        fontSize: 12,
        height: 60,
        justifyContent: 'center',


    },
});