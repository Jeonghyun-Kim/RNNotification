import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  filled?: boolean;
  style?: StyleProp<any>;
}
const ShareFilled: React.FC<Props> = ({
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
          d="M23.1983,11.1544h0L15.365,1.4631a.9941.9941,0,0,0-1.7673.6248V5.34a14.0668,14.0668,0,0,0-7.94,3.076C2.4926,11.0788.7853,15.272.5827,20.88a.9942.9942,0,0,0,1.6875.7461l.0045-.0044A10.8511,10.8511,0,0,1,5.7658,19.42a25.0876,25.0876,0,0,1,7.8319-1.69v3.74a.994.994,0,0,0,1.7671.625l7.8335-9.6914A.9992.9992,0,0,0,23.1983,11.1544Z"
        />
      ) : (
        <Path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          d="M22.9939,11.1658h0l-7.69-9.5144a.9759.9759,0,0,0-1.7349.6134V5.4577a13.8087,13.8087,0,0,0-7.7956,3.02C2.6661,11.0916.99,15.2083.7911,20.7143a.9761.9761,0,0,0,1.6567.7325l.0044-.0043A10.6512,10.6512,0,0,1,5.88,19.2808a24.6291,24.6291,0,0,1,7.6889-1.659v3.6719a.9759.9759,0,0,0,1.7349.6136l7.6905-9.5145A.9808.9808,0,0,0,22.9939,11.1658Z"
        />
      )}
    </Svg>
  );
};

export default ShareFilled;
