import { useNavigation } from "@react-navigation/native"
import { FlatList, ImageBackground, TouchableOpacity, View, Text } from "react-native";
import styles from "../components/styles";
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, MARGIN, ORGDETAILS } from "../components/constants";
import { HOMESCREEN_DATA } from "../data/HomeScreen/homeScreen_data";
import Header from "../components/Header";


export default HomeScreen = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(`${item.nav}`)} style={styles.touchable}>
                <View>
                    <ImageBackground source={require('../../assets/img/IWILLGO-White.png')} imageStyle={{ opacity: 0.06 }} style={styles.listItem}>
                        <View style={{ flexDirection: 'row' }}>
                            <MCI name={`${item.ico}`} size={MARGIN.vHeader} color={COLORS.white} />
                            <View style={styles.viewLeft}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                                <Text style={styles.listSubTitle}>{item.subTitle}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.container}>
                <FlatList style={styles.container}
                    data={HOMESCREEN_DATA}
                    numColumns={1}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}