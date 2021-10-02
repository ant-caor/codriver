import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Text} from 'react-native';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';

const DeliveryDetails: React.FunctionComponent<NativeStackScreenProps<any>> = (
  props: NativeStackScreenProps<any>,
) => {
  return (
    <Components.Screen
      navigation={props.navigation}
      route={props.route}
      showBackButton={true}>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        <Text>Delivery #{props?.route?.params?.id}</Text>
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
