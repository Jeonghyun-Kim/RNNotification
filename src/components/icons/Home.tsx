import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Home: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M10.97,2.7023,1.6538,11.4778a1.795,1.795,0,0,0-.7654,1.47v6.7943a2.306,2.306,0,0,0,2.306,2.306H6.77a2.306,2.306,0,0,0,2.306-2.306l0-2.0064a3.0524,3.0524,0,0,1,2.7918-3.1121,2.9243,2.9243,0,0,1,3.0567,2.9213v2.1972a2.306,2.306,0,0,0,2.306,2.306h3.5754a2.306,2.306,0,0,0,2.306-2.306V12.9481a1.795,1.795,0,0,0-.7654-1.47L13.03,2.7023A1.7949,1.7949,0,0,0,10.97,2.7023Z"
      />
    </Svg>
  );
};

export default Home;
