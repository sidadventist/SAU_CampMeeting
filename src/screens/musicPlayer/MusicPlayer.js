import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text, FlatList, TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PlayerModal from './PlayerModal';
function MusicPlayer() {
    const bottomSheetModalRef = useRef(null)
    const snapPoints = ["25%", "48%"]
    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <BottomSheetModalProvider>
                <Button title="Present Modal" onPress={handlePresentModal} />
                <Text>hi this is SAU News with a modal</Text>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{ borderRadius: 50 }}
                >
                    <PlayerModal />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}
export default MusicPlayer;