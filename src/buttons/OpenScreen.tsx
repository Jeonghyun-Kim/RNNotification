import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from 'react-native-navigation-hooks/dist';

const OpenScreen = ({ screenName }: { screenName: string }) => {
  const { push } = useNavigation();

  return (
    <Button
      title={screenName}
      onPress={() => {
        push(screenName);
      }}
    />
  );
};

export default OpenScreen;
