import {RouteProp, useRoute} from '@react-navigation/native';

import {Text} from 'react-native';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';

type NavigationParams = {
  id: string;
};

const DeliveryDetails = () => {
  const route = useRoute<RouteProp<Record<string, NavigationParams>, string>>();

  return (
    <Components.Screen showBackButton={true}>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        <Text>Delivery #{route.params?.id}</Text>
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
