import React from 'react';
import { View, StyleSheet, StyleProp, ViewProps } from 'react-native';

const s = StyleSheet.create({
  root: {},
});

interface Props extends ViewProps {
  style?: StyleProp<any>;
}
const Template: React.FC<Props> = ({ style, ...props }) => {
  return <View style={[style, s.root]} {...props} />;
};

export default Template;
