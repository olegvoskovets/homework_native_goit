import Svg, { Path } from "react-native-svg";

const ExitSvg = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
      <Path
        d="M17 16L21 12L17 8"
        stroke="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
      <Path
        d="M21 12H9"
        stroke="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default ExitSvg;
