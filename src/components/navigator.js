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


import Settings from '../screens/settings';


import VideoPlaylist from '../screens/videoPlayer/VideoList';
import VideoPlayer from '../screens/videoPlayer/VideoPlayer';

import ComingSoon from '../screens/ComingSoon';
import OnboardingScreen from '../screens/OnBoardingScreen';

import AboutDev from '../screens/AboutDev';
import ProfileList from '../screens/Speakers/ProfileList'
import ProfileDetail from '../screens/Speakers/ProfileItem'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            <Stack.Screen name='ThemeSong' component={ThemeSongTabs} options={{ title: `Theme Song: ${ORGDETAILS.themeSongEN}`, headerRight: settingsHeader }} />
            <Stack.Screen name='Program' component={Schedule} options={{ title: 'Program Outline', headerRight: settingsHeader }} />

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
function Onboarding() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='OnBoarding' component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Main' component={HomeStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function Navigator() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value = null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
    }, [])

    if (isFirstLaunch == null) {
        return null
    } else if (isFirstLaunch == true) {
        return (
            <NavigationContainer>
                <Onboarding />
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <HomeStack />
            </NavigationContainer>
        )
    }

}