import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as State from '../state';
import * as Components from '../components';
import * as Res from '../res';
import * as Utils from '../utils';

type DeliveryProps = {
  delivery: State.Models.Delivery;
  handleTouchOnDelivery?: () => void;
};

const styles = StyleSheet.create({
  deliveryTitle: {
    fontSize: Res.Constants.Dimensions.ITEM_TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
  deliveryTextContent: {},
});

const Delivery: React.FunctionComponent<DeliveryProps> = (
  props: DeliveryProps,
) => {
  const handleTouchOnDelivery = () => {
    if (props.handleTouchOnDelivery !== undefined) {
      props.handleTouchOnDelivery();
    }
  };

  const getDeliveryCustomerString = (): string => {
    return `Customer: ${props.delivery.customer}`;
  };

  return (
    <Components.Item handlePress={handleTouchOnDelivery}>
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryId}
        style={styles.deliveryTitle}>
        {Utils.formatDeliveryId(props.delivery)}
      </Text>
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryCustomer}
        style={styles.deliveryTextContent}>
        {getDeliveryCustomerString()}
      </Text>
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryAddress}
        style={styles.deliveryTextContent}>
        {Utils.formatDeliveryAddress(props.delivery)}
      </Text>
    </Components.Item>
  );
};

export default Delivery;
