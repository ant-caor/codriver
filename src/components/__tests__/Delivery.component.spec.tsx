import * as React from 'react';
import {render} from '@testing-library/react-native';
import {RecoilRoot} from 'recoil';

import {TestIds} from '../../res/constants';
import {Delivery} from '..';
import * as State from '../../state';
import * as Utils from '../../utils';

describe('Delivery Component', () => {
  const mockDelivery: State.Models.Delivery = {
    id: '1',
    address: 'Pere martell',
    city: 'Tarragona',
    zipCode: '43001',
    latitude: 1.34,
    longitude: 0.34,
    customer: 'Peter Parker',
  };
  it('Shows delivery id correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <Delivery delivery={mockDelivery} />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.Delivery.DeliveryId).children[0].valueOf(),
    ).toEqual(Utils.formatDeliveryId(mockDelivery));
  });

  it('Shows delivery customer information correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <Delivery delivery={mockDelivery} />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.Delivery.DeliveryCustomer).children[0].valueOf(),
    ).toEqual(Utils.formatDeliveryCustomer(mockDelivery));
  });

  it('Shows delivery address information correctly.', () => {
    const {getByTestId} = render(
      <RecoilRoot>
        <Delivery delivery={mockDelivery} />
      </RecoilRoot>,
    );
    expect(
      getByTestId(TestIds.Delivery.DeliveryAddress).children[0].valueOf(),
    ).toEqual(Utils.formatDeliveryAddress(mockDelivery));
  });
});
