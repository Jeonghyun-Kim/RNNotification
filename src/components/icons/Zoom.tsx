import React from 'react';
import { StyleProp } from 'react-native';
import { Line, Polyline, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Zoom: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="1 7.735 1 1 7.735 1"
      />
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="1.0001"
        y1="1.0001"
        x2="7.7354"
        y2="7.7354"
      />
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="22.974 7.735 22.974 1 16.238 1"
      />
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="22.9738"
        y1="1.0001"
        x2="16.2384"
        y2="7.7354"
      />
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="1 16.295 1 23.03 7.735 23.03"
      />
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="1.0001"
        y1="23.03"
        x2="7.7354"
        y2="16.2947"
      />
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="22.974 16.295 22.974 23.03 16.238 23.03"
      />
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="22.9738"
        y1="23.03"
        x2="16.2384"
        y2="16.2947"
      />
    </Svg>
  );
};

export default Zoom;
