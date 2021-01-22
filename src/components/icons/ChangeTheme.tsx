import React from 'react';
import { StyleProp } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  style?: StyleProp<any>;
}
const ChangeTheme: React.FC<Props> = ({
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
        d="M20.3588,8.5415v-4.03a.87.87,0,0,0-.87-.87h-4.03L12.6152.7979a.87.87,0,0,0-1.23,0L8.5415,3.6412h-4.03a.87.87,0,0,0-.87.87v4.03L.7979,11.3848a.87.87,0,0,0,0,1.23l2.8433,2.8433v4.03a.87.87,0,0,0,.87.87h4.03l2.8433,2.8433a.87.87,0,0,0,1.23,0l2.8433-2.8433h4.03a.87.87,0,0,0,.87-.87v-4.03l2.8433-2.8433a.87.87,0,0,0,0-1.23Zm-6.2229,9.3547a6.2545,6.2545,0,0,1-4.748-.2018,6.2619,6.2619,0,0,0,0-11.3888,6.2681,6.2681,0,1,1,4.748,11.5906Z"
      />
    </Svg>
  );
};

export default ChangeTheme;
