import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.error(e);
    }
  };

    return (
      <FlatList
        data={mediaArray}
        keyExtractor={x => x.title}
        renderItem={({item}) => <ListItem singleMedia={item} />}
      />
    );
  };