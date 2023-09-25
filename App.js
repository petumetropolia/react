import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { List } from "./components/List";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List />
      </SafeAreaView>
      <StatusBar style="auto"/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
