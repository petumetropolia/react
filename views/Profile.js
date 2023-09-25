import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const [avatar, setAvatar] = useState('http://placekitten.com/640');

const Profile = ({navigation}) => {
    // TODO: get isLoggedIn and setIsLoggedIn from MainContext
    console.log('profile isLoggedIn', isLoggedIn);
    const logout = async () => {
        setIsLoggedIn(false);
        await AsyncStorage.clear();
      };
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
        <Button title={'Logout'} onPress={logout} />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;