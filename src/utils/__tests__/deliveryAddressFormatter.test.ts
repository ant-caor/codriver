import {formatDeliveryAddress} from '..';
import * as State from '../../state';

const predictableMock: State.Models.Delivery = {
  id: '1',
  address: 'Pere martell',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

const mockWithoutCity: State.Models.Delivery = {
  id: '1',
  address: 'Pere martell',
  city: '',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

const mockWithoutAddress: State.Models.Delivery = {
  id: '1',
  address: '',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

const mockWithoutAddressAndCity: State.Models.Delivery = {
  id: '1',
  address: '',
  city: '',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

test('Address formatting for a delivery with all the information.', () => {
  expect(formatDeliveryAddress(predictableMock)).toBe(
    'Pere martell, Tarragona.',
  );
});

test('Address formatting for a delivery with the address but without city.', () => {
  expect(formatDeliveryAddress(mockWithoutCity)).toBe('Pere martell.');
});

test('Address formatting for a delivery with the city but without address.', () => {
  expect(formatDeliveryAddress(mockWithoutAddress)).toBe('Tarragona.');
});

test('Address formatting for a delivery without address or city.', () => {
  expect(formatDeliveryAddress(mockWithoutAddressAndCity)).toBe(
    'Unknown address.',
  );
});
