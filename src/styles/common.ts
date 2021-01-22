import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 19,
    paddingVertical: 12,
  },
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  touchableArea: {
    padding: 4,
  },
});

export default common;
