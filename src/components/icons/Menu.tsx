import React from 'react';
import { StyleProp } from 'react-native';
import { Line, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Menu: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="1.3px"
      {...props}>
      <Line x1="2.0045" y1="3.9054" x2="21.9848" y2="3.9054" />
      <Line x1="2.0045" y1="11.7499" x2="21.9848" y2="11.7499" />
      <Line x1="2.0045" y1="19.5943" x2="21.9848" y2="19.5943" />
    </Svg>
  );
};

export default Menu;
