import React from 'react';
import { StyleProp } from 'react-native';
import { Line, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Cross: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.3px"
        x1="3.5016"
        y1="20.4984"
        x2="20.4984"
        y2="3.5016"
      />
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.3px"
        x1="20.4984"
        y1="20.4984"
        x2="3.5016"
        y2="3.5016"
      />
    </Svg>
  );
};

export default Cross;
