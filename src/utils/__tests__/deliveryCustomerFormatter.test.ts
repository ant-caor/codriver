import * as State from '../../state';
import formatDeliveryCustomer from '../deliveryCustomerFormatter';

const mockWithCustomer: State.Models.Delivery = {
  id: '1',
  address: 'Pere Martell',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: 'Peter Parker',
};

const mockWithoutCustomer: State.Models.Delivery = {
  id: '1',
  address: 'Pere Martell',
  city: 'Tarragona',
  zipCode: '43001',
  latitude: 1.34,
  longitude: 0.34,
  customer: '',
};

test('Delivery customer formatting when Codriver can load delivery customer data.', () => {
  expect(formatDeliveryCustomer(mockWithCustomer)).toBe(
    'Customer: Peter Parker.',
  );
});

test('Delivery customer formatting when Codriver cannot load delivery customer data.', () => {
  expect(formatDeliveryCustomer(mockWithoutCustomer)).toBe('Unknown customer.');
});
