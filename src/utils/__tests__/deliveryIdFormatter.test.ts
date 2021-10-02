import * as State from '../../state';
import formatDeliveryId from '../deliveryIdFormatter';

const mockWithId: State.Models.Delivery = {
  id: '1',
  address: 'Pere Martell',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

const mockWithoutId: State.Models.Delivery = {
  id: '',
  address: 'Pere Martell',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

test('Delivery id formatting when Codriver can load delivery data.', () => {
  expect(formatDeliveryId(mockWithId)).toBe('Delivery #1');
});

test('Delivery id formatting when Codriver cannot load delivery data.', () => {
  expect(formatDeliveryId(mockWithoutId)).toBe('Unable to load delivery data.');
});
