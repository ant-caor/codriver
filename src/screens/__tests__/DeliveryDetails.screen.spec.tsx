import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {DeliveryDetails} from '..';
import {RecoilRoot} from 'recoil';

describe('Delivery Details Screen', () => {
  it('Shows deliveries details title correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <DeliveryDetails />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.DeliveryDetails.Title).children[0].valueOf(),
    ).toEqual('Delivery details');
  });
});
