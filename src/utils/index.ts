import {requestAndroidLocationPermission} from './android';
import {
  getDeliveredDeliveries,
  getUndeliveredDeliveries,
  isDelivered,
} from './deliveries';
import formatDeliveryAddress from './deliveryAddressFormater';
import formatDeliveryCustomer from './deliveryCustomerFormatter';
import formatDeliveryId from './deliveryIdFormatter';
import {
  getDeviceLocation,
  locationIsValid,
  formatDriverLocation,
} from './location';
import {stringIsEmpty} from './string';

export {
  formatDeliveryAddress,
  formatDeliveryCustomer,
  formatDeliveryId,
  stringIsEmpty,
  requestAndroidLocationPermission,
  getDeviceLocation,
  locationIsValid,
  formatDriverLocation,
  getUndeliveredDeliveries,
  getDeliveredDeliveries,
  isDelivered,
};
