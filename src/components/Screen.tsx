import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import * as Res from '../res';
import * as Components from '../components';

interface ScreenProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  stackProps?: NativeStackScreenProps<any>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
  backButton: {
    marginBottom: Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS,
  },
});

const Screen: React.FunctionComponent<ScreenProps | undefined> = (
  props: ScreenProps | undefined,
) => {
  const handlePressBack = () => {
    if (props?.stackProps !== undefined) {
      props?.stackProps?.navigation?.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {props?.showBackButton === true && (
        <View style={styles.backButton}>
          <Components.Button label={'Back'} handlePress={handlePressBack} />
        </View>
      )}
      {props?.children}
    </SafeAreaView>
  );
};

export default Screen;
