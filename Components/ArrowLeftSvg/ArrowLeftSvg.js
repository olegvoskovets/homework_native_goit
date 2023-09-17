import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowLeftSvg = (props) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/Svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <Path
          d="M20 12H4"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        />
        <Path
          d="M10 18L4 12L10 6"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        />
      </Svg>
    </View>
  );
};

export default ArrowLeftSvg;
