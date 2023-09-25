import PropTypes from "prop-types";

export const ListItem = (props) => {
  const item = props.singleMedia;

  return (
    <TouchableOpacity>
      <View>
        <Image source={{ uri: item.thumbnails.w160 }} />
      </View>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
