import {Text} from 'react-native';

import * as React from 'react';
import * as Res from '../res';
import * as Components from '../components';

const DeliveryDetails = () => {
  return (
    <Components.Screen>
      <Components.Section
        title={'Delivery details'}
        titleTestId={Res.Constants.TestIds.DeliveryDetails.Title}>
        <Text>Section content</Text>
      </Components.Section>
    </Components.Screen>
  );
};

export default DeliveryDetails;
