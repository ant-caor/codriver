import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import * as State from '../state';
import * as Components from '../components';
import * as Res from '../res';
import * as Utils from '../utils';
import {useRecoilState} from 'recoil';

type DeliveryProps = {
  delivery: State.Models.Delivery;
  handleTouchOnDelivery?: () => void;
};

const styles = StyleSheet.create({
  deliveryTitle: {
    fontSize: Res.Constants.Dimensions.ITEM_TITLE_FONT_SIZE,
    fontWeight: 'bold',
  },
});

const Delivery: React.FunctionComponent<DeliveryProps> = (
  props: DeliveryProps,
) => {
  const [activeDeliveryId] = useRecoilState(State.Atoms.activeDeliveryIdState);
  const [deliveredDeliveries] = useRecoilState(
    State.Atoms.deliveredDeliveriesState,
  );

  const handleTouchOnDelivery = () => {
    if (props.handleTouchOnDelivery !== undefined) {
      props.handleTouchOnDelivery();
    }
  };

  return (
    <Components.Item handlePress={handleTouchOnDelivery}>
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryId}
        style={styles.deliveryTitle}>
        {Utils.formatDeliveryId(props.delivery)}
      </Text>
      <Text testID={Res.Constants.TestIds.Delivery.DeliveryCustomer}>
        {Utils.formatDeliveryCustomer(props.delivery)}
      </Text>
      <Text testID={Res.Constants.TestIds.Delivery.DeliveryAddress}>
        {Utils.formatDeliveryAddress(props.delivery)}
      </Text>
      {activeDeliveryId === props.delivery.id && (
        <Components.Label text={'Active'} />
      )}
      {deliveredDeliveries.filter(function (d) {
        return d.deliveryId === props.delivery.id;
      }).length > 0 && (
        <Components.Label
          text={'Delivered'}
          backgroundColor={Res.Constants.Colors.Blue}
        />
      )}
    </Components.Item>
  );
};

export default Delivery;
