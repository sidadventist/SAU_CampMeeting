import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Alert, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { PROFILE_DATA } from '../../data/profiles/profiles'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../components/constants'


export default ProfileList = () => {


  const [results, setResults] = useState(PROFILE_DATA)
  // const [query, setQuery] = useState()
  const navigation = useNavigation()
  // const showAlert = () => {
  //   Alert.alert('Alert', this._selectedItem(item.description))
  // }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.notificationList}
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail', { data: item })} style={styles.notificationBox}>
              {/* to add, pass profile params to profile detail page */}
              <Image style={styles.image} source={item.icon} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 0,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
    borderWidth: 0.2,
    borderColor: COLORS.offWhite
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
    alignSelf: 'center',
  },
})
