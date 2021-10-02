import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from 'react-native';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';

type DeliveryDetailsProps = {
  stackProps?: NativeStackScreenProps<any>;
};

const DeliveryDetails: React.FunctionComponent<DeliveryDetailsProps> = (
  props: DeliveryDetailsProps,
) => {
  return (
    <Components.Screen stackProps={props.stackProps} showBackButton={true}>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        <Text>Delivery #{props?.stackProps?.route?.params?.id}</Text>
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
