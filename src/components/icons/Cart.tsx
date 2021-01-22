import React from 'react';
import { StyleProp } from 'react-native';
import { Circle, Path, Polyline, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Cart: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Circle fill="currentColor" cx="18.28" cy="21.0623" r="1.4033" />
      <Circle fill="currentColor" cx="7.6394" cy="21.0878" r="1.4033" />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.3612,14.7844H7.7792A1.7152,1.7152,0,0,1,6.1243,13.52L3.6988,4.6134H20.1357a1.7153,1.7153,0,0,1,1.6587,2.1519L20.02,13.5059A1.7153,1.7153,0,0,1,18.3612,14.7844Z"
      />
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="4.401 7.191 3.086 2.433 1.394 2.433"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.18,18.1153H6.1951a1.2284,1.2284,0,0,1-.9733-1.9778l1.395-1.8114"
      />
    </Svg>
  );
};

export default Cart;
