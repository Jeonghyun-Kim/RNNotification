import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  filled?: boolean;
  style?: StyleProp<any>;
}
const Filter: React.FC<Props> = ({
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
      <Path
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M1.3413,3.9959V7.0393a.7073.7073,0,0,0,.2005.4933l8.5911,8.8236V21.34a.6725.6725,0,0,0,.9708.6027l2.3683-1.1719a.6724.6724,0,0,0,.3742-.6028V16.3562l8.6114-8.8234a.7074.7074,0,0,0,.2011-.494V3.9959a.6772.6772,0,0,0-.6773-.6772H2.0186A.6772.6772,0,0,0,1.3413,3.9959Z"
      />
    </Svg>
  );
};

export default Filter;
