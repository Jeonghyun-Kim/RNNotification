import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Rect, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Ticket: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
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
        strokeLinejoin="round"
        d="M21.585,12a1.6155,1.6155,0,0,1,1.6107-1.6108V4.3208A1.2958,1.2958,0,0,0,21.9,3.0251H2.2682A1.2958,1.2958,0,0,0,.9725,4.3208v6.0684a1.6108,1.6108,0,1,1,0,3.2216v6.0684a1.2958,1.2958,0,0,0,1.2957,1.2957H21.9a1.2958,1.2958,0,0,0,1.2957-1.2957V13.6108A1.6155,1.6155,0,0,1,21.585,12Z"
      />
      <Rect
        x="11.2668"
        y="5.1064"
        width="1.6346"
        height="2.7983"
        fill="currentColor"
      />
      <Rect
        x="11.2668"
        y="10.6008"
        width="1.6346"
        height="2.7983"
        fill="currentColor"
      />
      <Rect
        x="11.2668"
        y="16.0952"
        width="1.6346"
        height="2.7983"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Ticket;
