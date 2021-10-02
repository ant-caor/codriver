import * as React from 'react';
import {render} from '@testing-library/react-native';

import DeliveryDetails from '../src/screens/DeliveryDetails';
import {TestIds} from '../src/res/constants';

describe('Delivery Details Screen', () => {
  it('Shows deliveries details title correctly.', () => {
    const {getByTestId} = render(<DeliveryDetails />);
    expect(
      getByTestId(TestIds.DeliveryDetails.Title).children[0].valueOf(),
    ).toEqual('Delivery details');
  });
});

export {};
