import React from 'react';
import { StyleProp } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
  filled?: boolean;
  style?: StyleProp<any>;
}
const MessageFilled: React.FC<Props> = ({
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
          d="M13.6807,1.0586H10.3193a9.8076,9.8076,0,0,0,.002,19.6152H10.69a3.6581,3.6581,0,0,1-.9775.54A.6691.6691,0,0,0,9.9678,22.5h.0273c13.124-.4248,13.4912-11.522,13.4912-11.6353A9.859,9.859,0,0,0,13.6807,1.0586ZM7,12.4142A1.4142,1.4142,0,1,1,8.4142,11,1.4142,1.4142,0,0,1,7,12.4142Zm5,0A1.4142,1.4142,0,1,1,13.4142,11,1.4142,1.4142,0,0,1,12,12.4142Zm5,0A1.4142,1.4142,0,1,1,18.4142,11,1.4142,1.4142,0,0,1,17,12.4142Z"
        />
      ) : (
        <>
          <Path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M13.6784,1.5585H10.3216a9.3076,9.3076,0,0,0,0,18.6152h1.5189a4.0484,4.0484,0,0,1-1.9343,1.5014A.1689.1689,0,0,0,9.9783,22c11.5893-.3746,13.0077-9.4461,13.0077-11.1337A9.3351,9.3351,0,0,0,13.6784,1.5585Z"
          />
          <Circle cx="17" cy="11" r="1.4142" fill="currentColor" />
          <Circle cx="12" cy="11" r="1.4142" fill="currentColor" />
          <Circle cx="7" cy="11" r="1.4142" fill="currentColor" />
        </>
      )}
    </Svg>
  );
};

export default MessageFilled;
