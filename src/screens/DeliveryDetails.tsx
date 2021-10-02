import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRecoilState, useRecoilValue} from 'recoil';
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
  const selectedDelivery = useRecoilValue<State.Models.Delivery | null>(
    State.Selectors.selectedDeliveryState,
  );
  const [, setActiveDeliveryId] = useRecoilState(
    State.Atoms.activeDeliveryIdState,
  );

  const handleMakeActive = () => {
    if (selectedDelivery !== null) {
      setActiveDeliveryId(selectedDelivery.id);
      if (props?.stackProps !== undefined) {
        props?.stackProps?.navigation?.goBack();
      }
    }
  };

  return (
    <Components.Screen stackProps={props.stackProps} showBackButton={true}>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        {selectedDelivery !== null && (
          <>
            <Text testID={Res.Constants.TestIds.DeliveryDetails.DeliveryId}>
              {Utils.formatDeliveryId(selectedDelivery)}
            </Text>
            <Text
              testID={Res.Constants.TestIds.DeliveryDetails.DeliveryCustomer}>
              {Utils.formatDeliveryCustomer(selectedDelivery)}
            </Text>
            <Text
              testID={Res.Constants.TestIds.DeliveryDetails.DeliveryAddress}>
              {Utils.formatDeliveryAddress(selectedDelivery)}
            </Text>
          </>
        )}
        <Components.Button
          label={'Make active'}
          handlePress={handleMakeActive}
          marginTop={Res.Constants.Dimensions.SPACE_BETWEEN_SECTIONS}
        />
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
