import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useMedia } from "../hooks/ApiHooks";

const List = () => {
  const {mediaArray} = useMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(x) => x.title}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};
