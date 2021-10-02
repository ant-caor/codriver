import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {DeliveryDetails} from '..';

describe('Delivery Details Screen', () => {
  it('Shows deliveries details title correctly.', () => {
    const {getByTestId} = render(<DeliveryDetails />);
    expect(
      getByTestId(TestIds.DeliveryDetails.Title).children[0].valueOf(),
    ).toEqual('Delivery details');
  });
});
