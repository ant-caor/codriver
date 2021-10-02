import * as React from 'react';
import {render} from '@testing-library/react-native';

import {TestIds} from '../../res/constants';
import {Delivery} from '..';
import * as State from '../../state';

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
    const {getByTestId} = render(<Delivery delivery={mockDelivery} />);
    expect(
      getByTestId(TestIds.Delivery.DeliveryId).children[0].valueOf(),
    ).toEqual(`Delivery #${mockDelivery.id}`);
  });

  it('Shows delivery customer information correctly.', () => {
    const {getByTestId} = render(<Delivery delivery={mockDelivery} />);
    expect(
      getByTestId(TestIds.Delivery.DeliveryCustomer).children[0].valueOf(),
    ).toEqual(`Customer: ${mockDelivery.customer}`);
  });

  it('Shows delivery address information correctly.', () => {
    const {getByTestId} = render(<Delivery delivery={mockDelivery} />);
    expect(
      getByTestId(TestIds.Delivery.DeliveryAddress).children[0].valueOf(),
    ).toEqual(`${mockDelivery.address}, ${mockDelivery.address}`);
  });
});
