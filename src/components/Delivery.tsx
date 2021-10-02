import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as State from '../state';
import * as Components from '../components';
import * as Res from '../res';

type DeliveryProps = {
  delivery: State.Models.Delivery;
  handleTouchOnDelivery?: () => void;
};

const styles = StyleSheet.create({
  deliveryTitle: {
    fontSize: Res.Constants.Dimensions.ITEM_TITLE_FONT_SIZE,
  },
});

const Delivery: React.FunctionComponent<DeliveryProps> = (
  props: DeliveryProps,
) => {
  const handleTouchOnDelivery = () => {
    if (props.handleTouchOnDelivery !== undefined) {
      props.handleTouchOnDelivery();
    }
  };

  return (
    <Components.Item handlePress={handleTouchOnDelivery}>
      <Text key={props.delivery.id} style={styles.deliveryTitle}>
        Delivery #{props.delivery.id}
      </Text>
    </Components.Item>
  );
};

export default Delivery;
