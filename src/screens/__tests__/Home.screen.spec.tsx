import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {Home} from '..';

describe('Home Screen', () => {
  it('Shows deliveries section title correctly.', () => {
    const {getByTestId} = render(<Home />);
    expect(
      getByTestId(TestIds.Home.DeliveriesSectionTitle).children[0].valueOf(),
    ).toEqual('Deliveries');
  });
});

export {};
