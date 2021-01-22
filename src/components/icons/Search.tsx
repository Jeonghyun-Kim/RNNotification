import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const Search: React.FC<Props> = ({ size = 24, color = 'black', ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      color={color}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill="currentColor"
        d="M23.05,20.2265,17.249,15.5727a8.9,8.9,0,1,0-1.2336,1.5649l5.7875,4.6432a.9963.9963,0,0,0,1.4006-.1537h0a.9964.9964,0,0,0-.1537-1.4006ZM9.6908,18.58A7.6894,7.6894,0,1,1,17.38,10.89,7.6894,7.6894,0,0,1,9.6908,18.58Z"
      />
    </Svg>
  );
};

export default Search;
