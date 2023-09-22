import { View } from "react-native";
import Maps from "../../Components/Maps/Maps";

const MapScreen = (props) => {
  const { location } = props.route.params;
  console.log("location", location);
  return (
    <View style={{ flex: 1 }}>
      <Maps locationMap={location} />
    </View>
  );
};

export default MapScreen;
