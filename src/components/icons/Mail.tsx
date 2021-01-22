import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Mail: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={color}
      {...props}>
      <Path
        stroke="currentColor"
        fill="currentColor"
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </Svg>
  );
};

export default Mail;
