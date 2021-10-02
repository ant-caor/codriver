import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';
import {Text} from 'react-native';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';
import * as State from '../state';
import * as Utils from '../utils';

type DeliveryDetailsProps = {
  stackProps?: NativeStackScreenProps<any>;
};

const DeliveryDetails: React.FunctionComponent<DeliveryDetailsProps> = (
  props: DeliveryDetailsProps,
) => {
  const selectedDelivery = useRecoilValue<State.Models.Delivery>(
    State.Selectors.selectedDeliveryState,
  );
  return (
    <Components.Screen stackProps={props.stackProps} showBackButton={true}>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        <Text testID={Res.Constants.TestIds.Delivery.DeliveryId}>
          {Utils.formatDeliveryId(selectedDelivery)}
        </Text>
        <Text testID={Res.Constants.TestIds.Delivery.DeliveryCustomer}>
          {Utils.formatDeliveryCustomer(selectedDelivery)}
        </Text>
        <Text testID={Res.Constants.TestIds.Delivery.DeliveryAddress}>
          {Utils.formatDeliveryAddress(selectedDelivery)}
        </Text>
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
