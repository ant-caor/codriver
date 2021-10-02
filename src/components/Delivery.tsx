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
  deliveryTextContent: {},
  activeLabel: {
    backgroundColor: '#77DD77',
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 6,
    marginTop: 16,
    borderRadius: Res.Constants.Dimensions.BUTTON_RADIUS,
  },
});

const Delivery: React.FunctionComponent<DeliveryProps> = (
  props: DeliveryProps,
) => {
  const [activeDeliveryId] = useRecoilState(State.Atoms.activeDeliveryIdState);

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
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryCustomer}
        style={styles.deliveryTextContent}>
        {Utils.formatDeliveryCustomer(props.delivery)}
      </Text>
      <Text
        testID={Res.Constants.TestIds.Delivery.DeliveryAddress}
        style={styles.deliveryTextContent}>
        {Utils.formatDeliveryAddress(props.delivery)}
      </Text>
      {activeDeliveryId === props.delivery.id && (
        <View style={styles.activeLabel}>
          <Text>Active</Text>
        </View>
      )}
    </Components.Item>
  );
};

export default Delivery;
