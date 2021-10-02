import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import * as Res from '../res';

type ScreenProps = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
});

const Screen: React.FunctionComponent<ScreenProps> = (props: ScreenProps) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default Screen;
