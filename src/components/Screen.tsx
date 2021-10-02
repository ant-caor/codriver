import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import * as Res from '../res';

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
    marginBottom: Res.Constants.Dimensions.ITEM_PADDING,
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
        <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      {props?.children}
    </SafeAreaView>
  );
};

export default Screen;
