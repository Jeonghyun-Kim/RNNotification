import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

type ArrowDirection = 'up' | 'right' | 'down' | 'left';

interface Props {
  size?: number;
  color?: string;
  direction?: ArrowDirection;
  style?: StyleProp<any>;
}
const Arrow: React.FC<Props> = ({
  size = 24,
  color = 'black',
  direction = 'right',
  style,
  ...props
}) => {
  const rotationAngle = React.useMemo(() => {
    switch (direction) {
      case 'right':
        return 0;
      case 'down':
        return 90;
      case 'left':
        return 180;
      case 'up':
        return 270;
      default:
        throw new Error('Invalid arrow direction');
    }
  }, [direction]);

  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      style={{
        ...style,
        transform: [{ rotate: `${rotationAngle}deg` }],
      }}
      {...props}>
      <Path
        fill="currentColor"
        d="M9.229,15.95l3.8061-3.8144a.1915.1915,0,0,0,0-.27L9.229,8.05A.9057.9057,0,0,1,9.23,6.77l.13-.13a.9056.9056,0,0,1,1.2808,0l4.8531,4.8531a.7164.7164,0,0,1,0,1.013L10.64,17.36a.9056.9056,0,0,1-1.2808,0l-.13-.13A.9057.9057,0,0,1,9.229,15.95Z"
      />
    </Svg>
  );
};

export default Arrow;
