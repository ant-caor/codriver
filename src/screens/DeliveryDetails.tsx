import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Res from '../res';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Res.Constants.Dimensions.SCREEN_PADDING,
  },
});

const DeliveryDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text testID={Res.Constants.TestIds.DeliveryDetails.Title}>
        Delivery Details Screen
      </Text>
    </SafeAreaView>
  );
};

export default DeliveryDetails;
