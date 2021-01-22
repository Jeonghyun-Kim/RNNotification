import React from 'react';
import { StyleProp } from 'react-native';
import { Polyline, Svg } from 'react-native-svg';

type ArrowDirection = 'right' | 'left';

interface Props {
  size?: number;
  color?: string;
  direction?: ArrowDirection;
  style?: StyleProp<any>;
}
const Arrow3: React.FC<Props> = ({
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
      case 'left':
        return 180;
      default:
        throw new Error('Invalid arrow direction');
    }
  }, [direction]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={color}
      style={{
        ...style,
        transform: [{ rotate: `${rotationAngle}deg` }],
      }}
      {...props}>
      <Polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3px"
        points="7.056 1.768 16.944 12 7.056 22.232"
      />
    </Svg>
  );
};

export default Arrow3;
