import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {Home} from '..';
import {RecoilRoot} from 'recoil';

describe('Home Screen', () => {
  it('Shows deliveries section title correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.Home.DeliveriesSectionTitle).children[0].valueOf(),
    ).toEqual('Deliveries');
  });
});
