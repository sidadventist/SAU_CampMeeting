import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from "./constants";
import { DATA } from '../data/Lessons/LessonList';
import { ORGDETAILS } from './constants';
import HomeScreen from '../screens/HomeScreen';
import ThemeSongEN from "../screens/ThemeSong/ThemeSongEN";
import ThemeSongXH from "../screens/ThemeSong/ThemeSongXH";
import ThemeSongND from "../screens/ThemeSong/ThemeSongND";
import DailyProgram from '../screens/Program/DailyProgram';
import Schedule from '../screens/Program/Schedule'
import SabbathProgram from '../screens/Program/SabbathProgram';
import { aDATA } from '../data/Lessons/Archive/LessonList';

import AdultLessonList from '../screens/Lessons/Adults/AdultLessonHome';
import ALesson1 from '../screens/Lessons/Adults/ALesson1'
import ALesson2 from '../screens/Lessons/Adults/ALesson2'
import ALesson3 from '../screens/Lessons/Adults/ALesson3'
import ALesson4 from '../screens/Lessons/Adults/ALesson4'

import ShonaLessonList from '../screens/Lessons/Shona/ShonaLessonHome'
import ShonaLesson1 from '../screens/Lessons/Shona/SLesson1';
import ShonaLesson2 from '../screens/Lessons/Shona/SLesson2'
import ShonaLesson3 from '../screens/Lessons/Shona/SLesson3'
import ShonaLesson4 from '../screens/Lessons/Shona/SLesson4'

import Settings from '../screens/settings';
import ArchiveList from '../screens/Lessons/Archive/Adults/AdultLessonHome'
import ALesson1A from '../screens/Lessons/Archive/Adults/ALesson1'
import ALesson2A from '../screens/Lessons/Archive/Adults/ALesson2'
import ALesson3A from '../screens/Lessons/Archive/Adults/ALesson3'
import ALesson4A from '../screens/Lessons/Archive/Adults/ALesson4'

import SNLesson1A from '../screens/Lessons/Archive/Shona/SLesson1'
import SNLesson2A from '../screens/Lessons/Archive/Shona/SLesson2'
import SNLesson3A from '../screens/Lessons/Archive/Shona/SLesson3'
import SNLesson4A from '../screens/Lessons/Archive/Shona/SLesson4'

import VideoPlaylist from '../screens/videoPlayer/VideoList';
import VideoPlayer from '../screens/videoPlayer/VideoPlayer';

import ComingSoon from '../screens/ComingSoon';
import GroceryDeliveryApp from '../screens/Lessons/Archive/ArchiveHome';
import AboutDev from '../screens/AboutDev';
import ProfileList from '../screens/Speakers/ProfileList'
import ProfileDetail from '../screens/Speakers/ProfileItem'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()


function HomeStack() {
    const navigation = useNavigation()
    const settingsHeader = () => (
        <MCI
            name={'cog'}
            size={25}
            color={'gray'}
            onPress={() => navigation.navigate('Settings')}
            title="Settings"
        />
    )
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ThemeSong' component={ThemeSongTabs} options={{ title: `Theme Song: ${ORGDETAILS.themeSongEN}` }} />
            <Stack.Screen name='Program' component={Schedule} options={{ title: 'Program Outline' }} />
            <Stack.Screen name='LessonA' component={AdultLessonList} options={{ title: 'Adult Lessons' }} />
            <Stack.Screen name='ALesson1' component={ALesson1} options={{ title: `Lesson ` + `${DATA[0].id} -` + ` ${DATA[0].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson2' component={ALesson2} options={{ title: `Lesson ` + `${DATA[1].id} -` + ` ${DATA[1].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson3' component={ALesson3} options={{ title: `Lesson ` + `${DATA[2].id} -` + ` ${DATA[2].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson4' component={ALesson4} options={{ title: `Lesson ` + `${DATA[3].id} -` + ` ${DATA[3].title}`, headerRight: settingsHeader }} />


            <Stack.Screen name='LessonSN' component={ShonaLessonList} options={{ title: "Zvidzidzo" }} />
            <Stack.Screen name='SLesson1' component={ShonaLesson1} options={{ title: `Chidzidzo ` + `${DATA[0].id} -` + ` ${DATA[0].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SLesson2' component={ShonaLesson2} options={{ title: `Chidzidzo ` + `${DATA[1].id} -` + ` ${DATA[1].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SLesson3' component={ShonaLesson3} options={{ title: `Chidzidzo ` + `${DATA[2].id} -` + ` ${DATA[2].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SLesson4' component={ShonaLesson4} options={{ title: `Chidzidzo ` + `${DATA[3].id} -` + ` ${DATA[3].stitle}`, headerRight: settingsHeader }} />

            <Stack.Screen name='Archive' component={ArchiveList} options={{ title: `Adult Lessons - ${aDATA[0].year}` }} />
            <Stack.Screen name='ALesson1A' component={ALesson1A} options={{ title: `Lesson ` + `${aDATA[0].id} -` + ` ${aDATA[0].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson2A' component={ALesson2A} options={{ title: `Lesson ` + `${aDATA[1].id} -` + ` ${aDATA[1].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson3A' component={ALesson3A} options={{ title: `Lesson ` + `${aDATA[2].id} -` + ` ${aDATA[2].title}`, headerRight: settingsHeader }} />
            <Stack.Screen name='ALesson4A' component={ALesson4A} options={{ title: `Lesson ` + `${aDATA[3].id} -` + ` ${aDATA[3].title}`, headerRight: settingsHeader }} />

            <Stack.Screen name='SNLesson1A' component={SNLesson1A} options={{ title: `Chidzidzo ` + `${aDATA[0].id} -` + ` ${aDATA[0].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SNLesson2A' component={SNLesson2A} options={{ title: `Chidzidzo ` + `${aDATA[1].id} -` + ` ${aDATA[1].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SNLesson3A' component={SNLesson3A} options={{ title: `Chidzidzo ` + `${aDATA[2].id} -` + ` ${aDATA[2].stitle}`, headerRight: settingsHeader }} />
            <Stack.Screen name='SNLesson4A' component={SNLesson4A} options={{ title: `Chidzidzo ` + `${aDATA[3].id} -` + ` ${aDATA[3].stitle}`, headerRight: settingsHeader }} />

            <Stack.Screen name='Video List' component={VideoPlaylist} />
            <Stack.Screen name='Video Player' component={VideoPlayer} />

            <Stack.Screen name='AboutUs' component={AboutDev} options={{ title: "About Us" }} />
            <Stack.Screen name='Profiles' component={ProfileList} />
            <Stack.Screen name='ProfileDetail' component={ProfileDetail} options={{ title: 'Profile Detail' }} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='Coming Soon' component={ComingSoon} />
        </Stack.Navigator>
    )

}

function ThemeSongTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='English' component={ThemeSongEN} />
            <TopTab.Screen name='Xhosa' component={ThemeSongXH} />
            <TopTab.Screen name='Ndebele' component={ThemeSongND} options={{ title: 'Zulu' }} />
        </TopTab.Navigator>
    )
}
function ProgramTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='Daily' component={DailyProgram} />
            <TopTab.Screen name='Sabbath' component={SabbathProgram} />
            <TopTab.Screen name='Schedule' component={Schedule} />

        </TopTab.Navigator>
    )
}


export default function Navigator() {

    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}