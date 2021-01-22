import React from 'react';
import { StyleProp } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Sun: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}>
      <Circle cx="12" cy="12" r="5" />
      <Path d="M12 1v2" />
      <Path d="M12 21v2" />
      <Path d="M4.22 4.22l1.42 1.42" />
      <Path d="M18.36 18.36l1.42 1.42" />
      <Path d="M1 12h2" />
      <Path d="M21 12h2" />
      <Path d="M4.22 19.78l1.42-1.42" />
      <Path d="M18.36 5.64l1.42-1.42" />
    </Svg>
  );
};

export default Sun;
