import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  filled?: boolean;
  style?: StyleProp<any>;
}
const Heart: React.FC<Props> = ({
  size = 24,
  color = 'black',
  filled = false,
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      {filled ? (
        <Path
          fill="currentColor"
          d="M11.9919,22.1694a16.4849,16.4849,0,0,0,3.9068-2.0872c3.8431-2.4432,7.5913-5.54,7.5913-10.6893,0-6.5582-3.6719-7.5623-6.0135-7.5623-2.4432,0-5.4973,1.6832-5.4768,10.1837C11.9792,3.5137,8.8487,1.843,6.2783,1.843,4.09,1.843.51,3.102.51,9.24c0,5.34,3.6064,8.4452,6.8881,10.6131A17.6178,17.6178,0,0,0,11.9919,22.1694Z"
        />
      ) : (
        <Path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.9866,21.9193a16.4853,16.4853,0,0,0,3.9067-2.0873c3.8431-2.4432,7.5913-5.54,7.5913-10.6893,0-6.5582-3.6719-7.5623-6.0134-7.5623-2.4432,0-5.4973,1.6832-5.4768,10.1838C11.9739,3.2636,8.8434,1.5929,6.2729,1.5929,4.0842,1.5929.5047,2.8519.5047,8.99c0,5.34,3.6063,8.4452,6.888,10.613A17.6194,17.6194,0,0,0,11.9866,21.9193Z"
        />
      )}
    </Svg>
  );
};

export default Heart;
