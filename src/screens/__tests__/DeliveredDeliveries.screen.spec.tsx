import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {DeliveredDeliveries} from '..';
import {RecoilRoot} from 'recoil';

describe('Delivered Deliveries Screen', () => {
  it('Shows delivered deliveries screen title correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <DeliveredDeliveries />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.DeliveredDeliveries.Title).children[0].valueOf(),
    ).toEqual('Delivered deliveries');
  });
});
