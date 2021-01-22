import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Template: React.FC<Props> = ({
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
      <Path fill="currentColor" d="" />
    </Svg>
  );
};

export default Template;
