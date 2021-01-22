import React from 'react';
import { StyleProp } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const ViewIcon: React.FC<Props> = ({
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
      <Path
        fill="currentColor"
        d="M12,3.0178c-5.2855,0-9.8238,3.58-11.8392,8.7067C2.1762,16.8509,6.7145,20.4311,12,20.4311s9.8239-3.58,11.8393-8.7066C21.8239,6.5981,17.2856,3.0178,12,3.0178Zm0,14.9329a6.2263,6.2263,0,1,1,6.2262-6.2262A6.2263,6.2263,0,0,1,12,17.9507Z"
      />
      <Circle fill="currentColor" cx="12.0478" cy="11.7245" r="3.4543" />
    </Svg>
  );
};

export default ViewIcon;
