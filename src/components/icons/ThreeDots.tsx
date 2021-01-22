import React from 'react';
import { StyleProp } from 'react-native';
import { Rect, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const ThreeDots: React.FC<Props> = ({
  size = 24,
  color = 'black',
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Rect
        x="1.6474"
        y="10.8138"
        width="2.7983"
        height="2.7983"
        rx="0.945"
        fill="currentColor"
      />
      <Rect
        x="10.6008"
        y="10.8138"
        width="2.7983"
        height="2.7983"
        rx="0.945"
        fill="currentColor"
      />
      <Rect
        x="19.5543"
        y="10.8138"
        width="2.7983"
        height="2.7983"
        rx="0.945"
        fill="currentColor"
      />
    </Svg>
  );
};

export default ThreeDots;
