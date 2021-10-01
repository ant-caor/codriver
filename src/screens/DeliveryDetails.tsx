import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DeliveryDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Delivery Details Screen</Text>
    </View>
  );
};

export default DeliveryDetails;
