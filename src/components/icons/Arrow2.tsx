import React from 'react';
import { StyleProp } from 'react-native';
import { Line, Svg } from 'react-native-svg';

type ArrowDirection = 'up' | 'right' | 'down' | 'left';

interface Props {
  size?: number;
  color?: string;
  direction?: ArrowDirection;
  style?: StyleProp<any>;
}
const Arrow2: React.FC<Props> = ({
  size = 24,
  color = 'black',
  direction = 'left',
  style,
  ...props
}) => {
  const rotationAngle = React.useMemo(() => {
    switch (direction) {
      case 'left':
        return 0;
      case 'up':
        return 90;
      case 'right':
        return 180;
      case 'down':
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
      <Line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.3px"
        x1="2.4009"
        y1="12"
        x2="11.3943"
        y2="3.0066"
      />
      <Line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.3px"
        x1="2.4009"
        y1="12"
        x2="11.3943"
        y2="20.9934"
      />
      <Line
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.3px"
        x1="2.4009"
        y1="12"
        x2="21.5991"
        y2="12"
      />
    </Svg>
  );
};

export default Arrow2;
